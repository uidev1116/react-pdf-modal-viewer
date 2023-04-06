/// <reference types="react" />
import type { ThumbnailViewProps } from './ThumbnailView'
export interface ThumbnailProps
  extends Pick<ThumbnailViewProps, 'error' | 'loading' | 'noData'> {
  pageNumber: number
  isInView: boolean
}
declare const Thumbnail: ({
  pageNumber,
  isInView,
  error,
  loading,
  noData,
}: ThumbnailProps) => JSX.Element
export default Thumbnail
//# sourceMappingURL=Thumbnail.d.ts.map
