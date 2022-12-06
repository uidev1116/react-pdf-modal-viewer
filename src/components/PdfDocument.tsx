import { useCallback } from 'react'
import { Document } from 'react-pdf'

import { useViewer } from '../hooks'

import type { ReactNode } from 'react'
import type {
  PDFDocumentProxy,
  DocumentInitParameters,
} from 'pdfjs-dist/types/src/display/api'

export interface PdfDocumentProps {
  file: string | Uint8Array
  className?: string
  children?: ReactNode
  options?: DocumentInitParameters
}

const PdfDocument = ({
  file,
  options = {},
  children,
  className = 'pdf-viewer__document',
}: PdfDocumentProps) => {
  const { setNumPages } = useViewer()

  const onDocumentLoadSuccess = useCallback(
    // eslint-disable-next-line no-shadow
    ({ numPages }: PDFDocumentProxy) => {
      setNumPages(numPages)
    },
    [setNumPages]
  )

  return (
    <Document
      file={file}
      options={options}
      onLoadSuccess={onDocumentLoadSuccess}
      className={className}
    >
      {/* {Children.map(
        children,
        (child) =>
          isValidElement(child) &&
          cloneElement(child as ReactElement, {
            numPages,
            inView,
            onInViewChange: handleInViewChange,
          })
      )} */}
      {children}
    </Document>
  )
}

export default PdfDocument
