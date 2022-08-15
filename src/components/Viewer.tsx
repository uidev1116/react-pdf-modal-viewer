import { useState, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Document, Page } from 'react-pdf'

import { useFocusTrap } from '../hooks/useFocusTrap'

/* eslint @typescript-eslint/no-unused-vars: 0 */

import type {
  PDFDocumentProxy,
  DocumentInitParameters,
} from 'pdfjs-dist/types/src/display/api'

export interface ViewerProps {
  isOpen: boolean
  onClose: () => void
  container: HTMLElement
  file: string | Uint8Array
  onAfterOpen?: () => void
  onAfterClose?: () => void
  onBackdropClick?: () => void
  id?: string
  classNames: {
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
  onAfterOpen,
  onAfterClose,
  onBackdropClick,
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
  const ref = useRef<HTMLDivElement>(null)
  const [numPages, setNumPages] = useState<number | null>(null)

  useFocusTrap(ref, {
    clickOutsideDeactivates: true,
    escapeDeactivates: true,
    returnFocusOnDeactivate: true,
    onDeactivate: onClose,
  })

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
        ref={ref}
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
              <div>
                <Page
                  key={`page_${index + 1}`}
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
      </div>
    </div>,
    container
  )
}

export default Viewer
