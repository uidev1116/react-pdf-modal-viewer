import { useState, useCallback } from 'react'
import { Document } from 'react-pdf'

import CanvasView from './CanvasView'
import ThumbnailView from './ThumbnailView'

import type {
  PDFDocumentProxy,
  DocumentInitParameters,
} from 'pdfjs-dist/types/src/display/api'

export interface PdfDocumentProps {
  file: string | Uint8Array
  className?: string
  thumbnailClassName?: string
  canvasClassName?: string
  options?: DocumentInitParameters
}

const PdfDocument = ({
  file,
  options = {},
  className = 'pdf-viewer__document',
  thumbnailClassName = 'pdf-viewer__thumnail',
  canvasClassName = 'pdf-viewer__canvas',
}: PdfDocumentProps) => {
  const [numPages, setNumPages] = useState<number | null>(null)

  const onDocumentLoadSuccess = useCallback(
    // eslint-disable-next-line no-shadow
    ({ numPages }: PDFDocumentProxy) => {
      setNumPages(numPages)
    },
    []
  )

  const [inView, setInView] = useState<number | null>(null)

  const handleInViewChange = (pageNumber: number) => {
    setInView(pageNumber)
  }

  return (
    <Document
      file={file}
      options={options}
      onLoadSuccess={onDocumentLoadSuccess}
      className={className}
    >
      <ThumbnailView
        className={thumbnailClassName}
        numPages={numPages}
        inView={inView}
      />
      <CanvasView
        className={canvasClassName}
        numPages={numPages}
        onInViewChange={handleInViewChange}
      />
    </Document>
  )
}

export default PdfDocument
