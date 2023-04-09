import { useCallback, useState } from 'react'
import { Document, pdfjs } from 'react-pdf'

import { ViewerProvider } from '../stores'

import type React from 'react'
import type { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api'

import type { ViewerProps } from './Viewer'
import type { Meta } from '../types/meta'

export interface ViewerCoreProps
  extends Pick<
    ViewerProps,
    'file' | 'options' | 'error' | 'loading' | 'noData'
  > {
  className: string
  children?: React.ReactNode
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
  const [scale, setScale] = useState<number>(1.0)
  const [meta, setMeta] = useState<Meta>({
    fileName: pdfjs.getPdfFilenameFromUrl(file),
    fileSize: {
      mb: undefined,
      kb: undefined,
      b: 0,
    },
    title: undefined,
    author: undefined,
    subject: undefined,
    keywords: undefined,
    creator: undefined,
    producer: undefined,
    version: undefined,
    creationDate: null,
    modificationDate: null,
  })

  const parseFileSize = (fileSize: number = 0) => {
    const kb = fileSize / 1024
    if (!kb) {
      return {
        mb: undefined,
        kb: undefined,
        b: fileSize,
      }
    }
    const mb = kb / 1024
    return {
      mb: mb >= 1 ? mb : undefined,
      kb: mb < 1 ? kb : undefined,
      b: fileSize,
    }
  }

  const handleLoadSuccess = useCallback(
    // eslint-disable-next-line no-shadow
    async (pdfDocument: PDFDocumentProxy) => {
      setNumPages(pdfDocument.numPages)

      // @ts-ignore
      const { info, contentLength } = await pdfDocument.getMetadata()
      setMeta((prevMeta) => ({
        ...prevMeta,
        fileSize: parseFileSize(contentLength),
        // @ts-ignore
        title: info.Title,
        // @ts-ignore
        author: info.Author,
        // @ts-ignore
        subject: info.Subject,
        // @ts-ignore
        keywords: info.Keywords,
        // @ts-ignore
        creator: info.Creater,
        // @ts-ignore
        producer: info.Producer,
        // @ts-ignore
        version: info.PDFFormatVersion,
        // @ts-ignore
        creationDate: pdfjs.PDFDateString.toDateObject(info.CreationDate),
        // @ts-ignore
        modificationDate: pdfjs.PDFDateString.toDateObject(info.ModDate),
      }))
    },
    [setNumPages, setMeta]
  )

  return (
    <ViewerProvider
      file={file}
      numPages={numPages}
      inView={inView}
      setInView={setInView}
      scale={scale}
      setScale={setScale}
      meta={meta}
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
