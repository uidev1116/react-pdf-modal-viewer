import { useState, useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import ViewerCore from './ViewerCore'
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
  shouldCloseOnBackdropClick?: boolean
  id?: string
  className?: string
  backdropClassName?: string
  dialogClassName?: string
  bodyClassName?: string
  closeButtonClassName?: string
  preventScroll?: boolean
  closeTimeout?: number
  role?: string
  ariaModal?: boolean | 'false' | 'true'
  options?: DocumentInitParameters
  children?: ReactNode
}

const Viewer = ({
  isOpen,
  onClose = () => {},
  container = document.body,
  onAfterOpen = () => {},
  onAfterClose = () => {},
  onBackdropClick = () => {},
  shouldCloseOnBackdropClick = true,
  id,
  className = 'pdf-viewer',
  backdropClassName = 'pdf-viewer__backdrop',
  dialogClassName = 'pdf-viewer__dialog',
  bodyClassName = 'pdf-viewer__body',
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

  const { setRef: setAriaHiddenRef, hide, unhide } = useAriaHidden()

  const handleFocusTrapDeactivate = useCallback(() => {
    if (preventScroll) {
      enableScroll()
    }
    unhide()
    onClose()
  }, [preventScroll, enableScroll, unhide, onClose])

  const {
    setRef: setTrapRef,
    activate,
    deactivate,
  } = useFocusTrap({
    allowOutsideClick: true, // falseの場合、Viewerを閉じてもFocusTrapが解除されないので注意
    escapeDeactivates: true,
    returnFocusOnDeactivate: true,
    onDeactivate: handleFocusTrapDeactivate,
  })

  const setRefs = useCallback(
    (node: HTMLElement | null) => {
      setBodyScrollLockRef(node)
      setTrapRef(node)
      setAriaHiddenRef(node)
    },
    [setBodyScrollLockRef, setTrapRef, setAriaHiddenRef]
  )

  const close = useCallback(
    (closeFn = () => {}) => {
      if (preventScroll) {
        enableScroll()
      }
      deactivate()
      unhide()
      closeFn()
    },
    [preventScroll, enableScroll, deactivate, unhide]
  )

  const isFirstMount = useFirstMountState()
  const [modalState, setModalState] = useState({
    isOpen: false,
    beforeClose: false,
    afterOpen: false,
  })

  useEffect(() => {
    if (isOpen) {
      setModalState((prevState) => ({ ...prevState, isOpen: true }))
    } else if (!isFirstMount) {
      setModalState((prevState) => ({ ...prevState, beforeClose: true }))
    }
  }, [isOpen, isFirstMount])

  useEffect(() => {
    if (modalState.isOpen) {
      requestAnimationFrame(() => {
        setModalState((prevState) => ({ ...prevState, afterOpen: true }))
        if (isOpen) {
          onAfterOpen()
        }
      })
    }
  }, [modalState.isOpen, isOpen, onAfterOpen])

  useEffect(() => {
    if (modalState.beforeClose) {
      setTimeout(() => {
        setModalState({
          isOpen: false,
          beforeClose: false,
          afterOpen: false,
        })
        onAfterClose()
      }, closeTimeout)
    }
  }, [modalState.beforeClose, onAfterClose, closeTimeout])

  useEffect(() => {
    if (modalState.afterOpen) {
      if (preventScroll) {
        disableScroll()
      }
      activate()
      hide()
    }
  }, [modalState.afterOpen, preventScroll, disableScroll, activate, hide])

  const handleClick = useCallback(() => {
    close(onClose)
  }, [close, onClose])

  const backdropRef = useRef<HTMLDivElement>(null)

  const handleBackdropClick = useCallback(
    (event: MouseEvent) => {
      if (event.target !== backdropRef.current) {
        // 内側をクリックした場合はは何もしない
        return
      }
      if (shouldCloseOnBackdropClick) {
        close(() => onBackdropClick(event))
      }
    },
    [shouldCloseOnBackdropClick, close, onBackdropClick]
  )

  const buildClassName = (): string => {
    const { afterOpen, beforeClose } = modalState
    let result = className

    if (afterOpen) {
      result = `${className} ${className}--after-open`
    }

    if (beforeClose) {
      result = `${className} ${className}--before-close`
    }

    return result
  }

  const shouldBeClosed = () => !modalState.isOpen && !modalState.beforeClose

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
          <ViewerCore
            file={file}
            className={bodyClassName}
            options={options}
            error={error}
            loading={loading}
            noData={noData}
          >
            {children}
          </ViewerCore>
          <button
            type="button"
            className={closeButtonClassName}
            aria-label="Close Viewer"
            onClick={handleClick}
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
