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
  const [pageNumber] = useState(1)

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
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  )
}

export default Viewer
