import { useEffect, useRef } from 'react'
import { Page } from 'react-pdf'

import type { ThumbnailViewProps } from './ThumbnailView'

export interface ThumbnailProps
  extends Pick<ThumbnailViewProps, 'error' | 'loading' | 'noData'> {
  pageNumber: number
  isInView: boolean
}

const Thumbnail = ({
  pageNumber,
  isInView,
  error,
  loading,
  noData,
}: ThumbnailProps) => {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (isInView) {
      ref.current?.scrollIntoView()
    }
  }, [isInView])

  return (
    <a ref={ref} href={`#page-${pageNumber}`}>
      <Page
        pageNumber={pageNumber}
        width={150}
        renderAnnotationLayer={false}
        renderTextLayer={false}
        error={error}
        loading={loading}
        noData={noData}
      />
      <span>{pageNumber}</span>
    </a>
  )
}

export default Thumbnail
