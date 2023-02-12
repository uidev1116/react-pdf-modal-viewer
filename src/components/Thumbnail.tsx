import { useEffect, useRef, useCallback } from 'react'
import { Page } from 'react-pdf'
import { scrollTo } from '../utils'

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
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isInView && ref.current) {
      scrollTo(ref.current)
    }
  }, [isInView])

  const handleClick = useCallback(() => {
    scrollTo(`#page-${pageNumber}`)
  }, [pageNumber])

  return (
    <button ref={ref} type="button" onClick={handleClick}>
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
    </button>
  )
}

export default Thumbnail
