import {
  useState,
  useCallback,
  Children,
  cloneElement,
  isValidElement,
} from 'react'
import { Document } from 'react-pdf'

import type {
  PDFDocumentProxy,
  DocumentInitParameters,
} from 'pdfjs-dist/types/src/display/api'

export interface PdfDocumentProps {
  file: string | Uint8Array
  className?: string
  children?: React.ReactNode
  thumbnailClassName?: string
  canvasClassName?: string
  options?: DocumentInitParameters
}

const PdfDocument = ({
  file,
  options = {},
  children,
  className = 'pdf-viewer__document',
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
      {Children.map(
        children,
        (child) =>
          isValidElement(child) &&
          cloneElement(child as React.ReactElement, {
            numPages,
            inView,
            onInViewChange: handleInViewChange,
          })
      )}
    </Document>
  )
}

export default PdfDocument
