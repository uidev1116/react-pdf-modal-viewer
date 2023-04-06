/// <reference types="react" />
import type { PageProps } from 'react-pdf'
export interface CanvasViewProps
  extends Pick<PageProps, 'error' | 'loading' | 'noData'> {
  className?: string
}
declare const CanvasView: ({
  className,
  error,
  loading,
  noData,
}: CanvasViewProps) => JSX.Element
export default CanvasView
//# sourceMappingURL=CanvasView.d.ts.map
