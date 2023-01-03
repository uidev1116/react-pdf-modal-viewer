import { useCallback } from 'react'
import { Document } from 'react-pdf'

import { useViewer } from '../hooks'

import type { ReactNode } from 'react'
import type { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api'

import type { ViewerProps } from './Viewer'

export interface PdfDocumentProps
  extends Pick<
    ViewerProps,
    'file' | 'options' | 'error' | 'loading' | 'noData'
  > {
  className?: string
  children?: ReactNode
}

const PdfDocument = ({
  file,
  options = {},
  className = 'pdf-viewer__document',
  error,
  loading,
  noData,
  children,
}: PdfDocumentProps) => {
  const { setNumPages } = useViewer()

  const handleLoadSuccess = useCallback(
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
      onLoadSuccess={handleLoadSuccess}
      className={className}
      error={error}
      loading={loading}
      noData={noData}
    >
      {children}
    </Document>
  )
}

export default PdfDocument
