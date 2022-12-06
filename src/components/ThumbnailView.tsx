import Thumbnail from './Thumbnail'
import { useViewer } from '../hooks'
import { range } from '../utils'

export interface ThumbnailViewProps {
  className?: string
}

const ThumbnailView = ({
  className = 'pdf-viewer__thumbnail',
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
          />
        ))}
    </div>
  )
}

export default ThumbnailView
