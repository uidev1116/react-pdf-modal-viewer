import { useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Document, Page } from 'react-pdf'

import { useBodyScrollLock, useFocusTrap, useAriaHidden } from '../hooks'

/* eslint @typescript-eslint/no-unused-vars: 0 */
/* eslint no-lonely-if: 0 */

import type {
  PDFDocumentProxy,
  DocumentInitParameters,
} from 'pdfjs-dist/types/src/display/api'

export interface ViewerProps {
  isOpen: boolean
  onClose: () => void
  container?: HTMLElement
  file: string | Uint8Array
  onAfterOpen?: () => void
  onAfterClose?: () => void
  onBackdropClick?: () => void
  id?: string
  classNames?: {
    viewer?: string
    backdrop?: string
    dialog?: string
    body?: string
    thumbnail?: string
    canvas?: string
    closeButton?: string
  }
  role?: string
  preventScroll?: boolean
  ariaModal?: boolean | 'false' | 'true'
  options?: DocumentInitParameters
}

const Viewer = ({
  isOpen,
  onClose = () => {},
  container = document.body,
  onAfterOpen = () => {},
  onAfterClose = () => {},
  onBackdropClick = () => {},
  id,
  classNames = {
    viewer: 'pdf-viewer',
    backdrop: 'pdf-viewer__backdrop',
    dialog: 'pdf-viewer__dialog',
    body: 'pdf-viewer__body',
    thumbnail: 'pdf-viewer__thumbnail',
    canvas: 'pdf-viewer__canvas',
    closeButton: 'pdf-viewer__close-btn',
  },
  role = 'dialog',
  preventScroll = true,
  ariaModal = true,
  file,
  options = {},
}: ViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null)

  const { setRef: setBodyScrollLockRef, disable, enable } = useBodyScrollLock()

  const {
    setRef: setTrapRef,
    activate,
    deactivate,
  } = useFocusTrap({
    clickOutsideDeactivates: true,
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
        disable()
      }
      activate()
      hide()
    } else {
      if (preventScroll) {
        enable()
      }
      deactivate()
      unhide()
    }
  }, [
    isOpen,
    preventScroll,
    disable,
    enable,
    activate,
    deactivate,
    hide,
    unhide,
  ])

  const handleCloseBtnClick = () => {
    onClose()
    onAfterClose()
  }

  const handleBackDropClick = () => {
    onBackdropClick()
    onAfterClose()
  }

  const onDocumentLoadSuccess = useCallback(
    // eslint-disable-next-line no-shadow
    ({ numPages }: PDFDocumentProxy) => {
      setNumPages(numPages)
    },
    []
  )

  if (!isOpen) {
    return null
  }

  return createPortal(
    <div className={classNames.viewer} id={id}>
      <div // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        className={classNames.backdrop}
        onClick={handleBackDropClick}
      >
        <div
          ref={setRefs}
          tabIndex={-1}
          className={classNames.dialog}
          role={role}
          aria-modal={ariaModal}
        >
          <Document
            file={file}
            options={options}
            onLoadSuccess={onDocumentLoadSuccess}
            className={classNames.body}
          >
            <div className={classNames.thumbnail}>
              {Array.from(new Array(numPages), (_, index) => (
                <div key={`page_${index + 1}`}>
                  <Page
                    pageNumber={index + 1}
                    width={150}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                  <span>{index + 1}</span>
                </div>
              ))}
            </div>
            <div className={classNames.canvas}>
              {Array.from(new Array(numPages), (_, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </div>
          </Document>
          <button
            type="button"
            className={classNames.closeButton}
            aria-label="Close viewer"
            onClick={handleCloseBtnClick}
          />
        </div>
      </div>
    </div>,
    container
  )
}

export default Viewer
