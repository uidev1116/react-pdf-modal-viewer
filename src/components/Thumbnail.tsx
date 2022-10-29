import { useEffect, useRef } from 'react'
import { Page } from 'react-pdf'

export interface ThumbnailProps {
  pageNumber: number
  isInView: boolean
}

const Thumbnail = ({ pageNumber, isInView }: ThumbnailProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null)

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
      />
      <span>{pageNumber}</span>
    </a>
  )
}

export default Thumbnail
