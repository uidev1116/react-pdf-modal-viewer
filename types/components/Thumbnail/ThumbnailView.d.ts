/// <reference types="react" />
import type { PageProps } from 'react-pdf'
export interface ThumbnailViewProps
  extends Pick<PageProps, 'error' | 'loading' | 'noData'> {
  className?: string
}
declare const ThumbnailView: ({
  className,
  error,
  loading,
  noData,
}: ThumbnailViewProps) => JSX.Element
export default ThumbnailView
//# sourceMappingURL=ThumbnailView.d.ts.map
