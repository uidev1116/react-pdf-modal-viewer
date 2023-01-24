import { useCallback, useState } from 'react'
import { Document } from 'react-pdf'

import { ViewerProvider } from '../providers'

import type { ReactNode } from 'react'
import type { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api'

import type { ViewerProps } from './Viewer'

export interface ViewerCoreProps
  extends Pick<
    ViewerProps,
    'file' | 'options' | 'error' | 'loading' | 'noData'
  > {
  className: string
  children?: ReactNode
}

const ViewerCore = ({
  file,
  options,
  className,
  error,
  loading,
  noData,
  children,
}: ViewerCoreProps) => {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [inView, setInView] = useState<number | null>(null)

  const handleLoadSuccess = useCallback(
    // eslint-disable-next-line no-shadow
    ({ numPages }: PDFDocumentProxy) => {
      setNumPages(numPages)
    },
    [setNumPages]
  )

  return (
    <ViewerProvider
      file={file}
      numPages={numPages}
      inView={inView}
      setInView={setInView}
    >
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
    </ViewerProvider>
  )
}

export default ViewerCore
