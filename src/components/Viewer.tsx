import { useState, useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import { ViewerProvider } from '../providers'
import PdfDocument from './PdfDocument'
import CanvasView from './CanvasView'
import ThumbnailView from './ThumbnailView'
import { Toolbar } from './Toolbar'

import {
  useBodyScrollLock,
  useFocusTrap,
  useAriaHidden,
  useFirstMountState,
} from '../hooks'

/* eslint @typescript-eslint/no-unused-vars: 0 */
/* eslint no-lonely-if: 0 */

import type { ReactNode, MouseEvent } from 'react'
import type { DocumentProps } from 'react-pdf'
import type { DocumentInitParameters } from 'pdfjs-dist/types/src/display/api'

export interface ViewerProps
  extends Pick<DocumentProps, 'error' | 'loading' | 'noData'> {
  isOpen: boolean
  onClose: () => void
  container?: HTMLElement
  file: string
  onAfterOpen?: () => void
  onAfterClose?: () => void
  onBackdropClick?: (event?: MouseEvent) => void
  id?: string
  className?: string
  backdropClassName?: string
  dialogClassName?: string
  documentClassName?: string
  closeButtonClassName?: string
  preventScroll?: boolean
  closeTimeout?: number
  role?: string
  ariaModal?: boolean | 'false' | 'true'
  options?: DocumentInitParameters
  children?: ReactNode
}

const Viewer = ({
  isOpen: _isOpen,
  onClose = () => {},
  container = document.body,
  onAfterOpen = () => {},
  onAfterClose = () => {},
  onBackdropClick = () => {},
  id,
  className = 'pdf-viewer',
  backdropClassName = 'pdf-viewer__backdrop',
  dialogClassName = 'pdf-viewer__dialog',
  documentClassName = 'pdf-viewer__document',
  closeButtonClassName = 'pdf-viewer__close-btn',
  error,
  loading,
  noData,
  preventScroll = true,
  closeTimeout = 0,
  role = 'dialog',
  ariaModal = true,
  file,
  options = {},
  children,
}: ViewerProps) => {
  const {
    setRef: setBodyScrollLockRef,
    disableScroll,
    enableScroll,
  } = useBodyScrollLock()

  const {
    setRef: setTrapRef,
    activate,
    deactivate,
  } = useFocusTrap({
    allowOutsideClick: true, // falseの場合、Viewerを閉じてもFocusTrapが解除されないので注意
    escapeDeactivates: true,
    returnFocusOnDeactivate: true,
    onDeactivate: onClose,
  })

  const { setRef: setAriaHiddenRef, hide, unhide } = useAriaHidden()

  const setRefs = useCallback(
    (node: HTMLElement | null) => {
      setBodyScrollLockRef(node)
      setTrapRef(node)
      setAriaHiddenRef(node)
    },
    [setBodyScrollLockRef, setTrapRef, setAriaHiddenRef]
  )

  const isFirstMount = useFirstMountState()
  const [isOpen, setIsOpen] = useState(false)
  const [afterOpen, setAfterOpen] = useState(false)
  const [beforeClose, setBeforeClose] = useState(false)

  useEffect(() => {
    if (_isOpen) {
      setIsOpen(true)
      if (preventScroll) {
        disableScroll()
      }
      activate()
      hide()
      if (!isFirstMount) {
        onAfterOpen()
      }
    } else {
      if (!isFirstMount) {
        setBeforeClose(true)
      }
      if (preventScroll) {
        enableScroll()
      }
      deactivate()
      unhide()
      if (!isFirstMount) {
        onAfterClose()
      }
    }
  }, [
    _isOpen,
    preventScroll,
    isFirstMount,
    disableScroll,
    enableScroll,
    activate,
    deactivate,
    hide,
    unhide,
    onAfterOpen,
    onAfterClose,
  ])

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        setAfterOpen(true)
      })
    }
  }, [isOpen])

  useEffect(() => {
    if (beforeClose) {
      setTimeout(() => {
        setIsOpen(false)
        setBeforeClose(false)
        setAfterOpen(false)
      }, closeTimeout)
    }
  }, [beforeClose, closeTimeout])

  const backdropRef = useRef<HTMLDivElement>(null)

  const handleBackdropClick = (event: MouseEvent) => {
    if (event.target !== backdropRef.current) {
      // 内側をクリックした場合はは何もしない
      return
    }
    onBackdropClick(event)
  }

  const buildClassName = (): string => {
    let appliedClassName = className
    if (afterOpen) {
      appliedClassName = `${className} ${className}--after-open`
    }

    if (beforeClose) {
      appliedClassName = `${className} ${className}--before-close`
    }

    return appliedClassName
  }

  const shouldBeClosed = () => !isOpen && !beforeClose

  if (shouldBeClosed()) {
    return null
  }

  return createPortal(
    <div className={buildClassName()} id={id}>
      <div // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        ref={backdropRef}
        className={backdropClassName}
        onClick={handleBackdropClick}
      >
        <div
          ref={setRefs}
          tabIndex={-1}
          className={dialogClassName}
          role={role}
          aria-modal={ariaModal}
        >
          <ViewerProvider file={file}>
            <PdfDocument
              options={options}
              className={documentClassName}
              error={error}
              loading={loading}
              noData={noData}
            >
              {children}
            </PdfDocument>
          </ViewerProvider>
          <button
            type="button"
            className={closeButtonClassName}
            aria-label="Close Viewer"
            onClick={onClose}
          />
        </div>
      </div>
    </div>,
    container
  )
}

Viewer.Canvas = CanvasView
Viewer.Thumbnail = ThumbnailView
Viewer.Toolbar = Toolbar

export default Viewer
