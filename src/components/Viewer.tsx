import { useState, useCallback } from 'react'
import { Document, Page } from 'react-pdf'

import {
  PDFDocumentProxy,
  DocumentInitParameters,
} from 'pdfjs-dist/types/src/display/api'

interface ViewerProps {
  file: string | Uint8Array
  options?: DocumentInitParameters
}

const Viewer = ({ file, options = {} }: ViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null)

  const onDocumentLoadSuccess = useCallback(
    // eslint-disable-next-line no-shadow
    ({ numPages }: PDFDocumentProxy) => {
      setNumPages(numPages)
    },
    []
  )

  return (
    <Document
      file={file}
      options={options}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <div className="pdf-viewer">
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
      </div>
    </Document>
  )
}

export default Viewer
