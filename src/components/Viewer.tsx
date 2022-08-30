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
    modal?: string
    body?: string
    thumbnail?: string
    canvas?: string
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
    modal: 'pdf-viewer__modal',
    body: 'pdf-viewer__body',
    thumbnail: 'pdf-viewer__thumbnail',
    canvas: 'pdf-viewer__canvas',
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
      <div className={classNames.backdrop} tabIndex={-1}>
        <div
          ref={(node) => {
            setBodyScrollLockRef(node)
            setTrapRef(node)
            setAriaHiddenRef(node)
          }}
          className={classNames.modal}
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
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  renderAnnotationLayer={false}
                />
              ))}
            </div>
          </Document>
          <button type="button">ボタン</button>
        </div>
      </div>
    </div>,
    container
  )
}

export default Viewer
