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
    <div>
      <Document
        file={file}
        options={options}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  )
}

export default Viewer
