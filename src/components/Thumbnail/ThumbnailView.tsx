import Thumbnail from './Thumbnail'
import { useViewer } from '../../hooks'
import { range } from '../../utils'

import type { PageProps } from 'react-pdf'

export interface ThumbnailViewProps
  extends Pick<PageProps, 'error' | 'loading' | 'noData'> {
  className?: string
}

const ThumbnailView = ({
  className = 'pdf-modal-viewer__thumbnail',
  error,
  loading,
  noData,
}: ThumbnailViewProps) => {
  const { numPages, inView } = useViewer()

  return (
    <div className={className}>
      {numPages &&
        range(1, numPages).map((index) => (
          <Thumbnail
            key={`thumbnail_${index}`}
            pageNumber={index}
            isInView={inView === index}
            error={error}
            loading={loading}
            noData={noData}
          />
        ))}
    </div>
  )
}

export default ThumbnailView
