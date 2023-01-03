import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import { ViewerProvider } from '../providers'
import PdfDocument from './PdfDocument'
import CanvasView from './CanvasView'
import ThumbnailView from './ThumbnailView'

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
  file: string | Uint8Array
  onAfterOpen?: () => void
  onAfterClose?: () => void
  onBackdropClick?: (event?: MouseEvent) => void
  id?: string
  className?: string
  backdropClassName?: string
  dialogClassName?: string
  documentClassName?: string
  closeButtonClassName?: string
  role?: string
  preventScroll?: boolean
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
  id,
  className = 'pdf-viewer',
  backdropClassName = 'pdf-viewer__backdrop',
  dialogClassName = 'pdf-viewer__dialog',
  documentClassName = 'pdf-viewer__document',
  closeButtonClassName = 'pdf-viewer__close-btn',
  error,
  loading,
  noData,
  role = 'dialog',
  preventScroll = true,
  ariaModal = true,
  file,
  options = {},
  children,
}: ViewerProps) => {
  const isFirstMount = useFirstMountState()

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

  useEffect(() => {
    if (isOpen) {
      if (preventScroll) {
        disableScroll()
      }
      activate()
      hide()
      if (!isFirstMount) {
        onAfterOpen()
      }
    } else {
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
    isOpen,
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

  const backdropRef = useRef<HTMLDivElement | null>(null)

  const handleBackdropClick = (event: MouseEvent) => {
    if (event.target !== backdropRef.current) {
      // 内側をクリックした場合はは何もしない
      return
    }
    onBackdropClick(event)
  }

  if (!isOpen) {
    return null
  }

  return createPortal(
    <ViewerProvider>
      <div className={className} id={id}>
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
            <PdfDocument
              file={file}
              options={options}
              className={documentClassName}
              error={error}
              loading={loading}
              noData={noData}
            >
              {children}
            </PdfDocument>
            <button
              type="button"
              className={closeButtonClassName}
              aria-label="Close Viewer"
              onClick={onClose}
            />
          </div>
        </div>
      </div>
    </ViewerProvider>,
    container
  )
}

Viewer.Canvas = CanvasView
Viewer.Thumbnail = ThumbnailView

export default Viewer
