import { useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Document, Page } from 'react-pdf'

import { useBodyScrollLock, useFocusTrap } from '../hooks'

/* eslint @typescript-eslint/no-unused-vars: 0 */

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
    modal?: string
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
    modal: 'pdf-viewer__modal',
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

  useEffect(() => {
    if (isOpen) {
      if (preventScroll) {
        disable()
      }
      activate()
    } else {
      if (preventScroll) {
        enable()
      }
      deactivate()
    }
  }, [isOpen, preventScroll, activate, deactivate, disable, enable])

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
    <div className={classNames.viewer} tabIndex={-1} id={id}>
      <div
        ref={(node) => {
          setTrapRef(node)
          setBodyScrollLockRef(node)
        }}
        className={classNames.modal}
        role={role}
        aria-modal={ariaModal}
      >
        <Document
          file={file}
          options={options}
          onLoadSuccess={onDocumentLoadSuccess}
          className="pdf-viewer__document"
        >
          <div className="pdf-viewer__thumbnail">
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
          <div className="pdf-viewer__content">
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
        <a href="http://example.com">リンク</a>
      </div>
    </div>,
    container
  )
}

export default Viewer
