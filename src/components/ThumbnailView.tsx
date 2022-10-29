import Thumbnail from './Thumbnail'
import { range } from '../utils'

export interface ThumbnailViewProps {
  className?: string
  numPages: number | null
  inView: number | null
}

const ThumbnailView = ({ className, numPages, inView }: ThumbnailViewProps) => (
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
