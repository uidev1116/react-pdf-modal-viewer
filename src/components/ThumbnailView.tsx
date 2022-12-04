import Thumbnail from './Thumbnail'
import { range } from '../utils'

export interface ThumbnailViewProps {
  className?: string
  numPages?: number
  inView?: number
}

const ThumbnailView = ({
  className = 'pdf-viewer__thumbnail',
  numPages = 1,
  inView = 1,
}: ThumbnailViewProps) => (
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

export default ThumbnailView
