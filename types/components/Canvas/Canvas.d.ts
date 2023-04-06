/// <reference types="react" />
import type { PageProps } from 'react-pdf'
import type { CanvasViewProps } from './CanvasView'
export interface CanvasProps
  extends Pick<CanvasViewProps, 'error' | 'loading' | 'noData'>,
    Pick<PageProps, 'scale' | 'onLoadSuccess' | 'width'> {
  inViewRoot: HTMLDivElement | null
  pageNumber: number
  onInViewChange?: (inView: boolean, entry: IntersectionObserverEntry) => void
}
declare const Canvas: ({
  inViewRoot,
  pageNumber,
  onInViewChange,
  scale,
  error,
  loading,
  noData,
  onLoadSuccess,
  width,
}: CanvasProps) => JSX.Element
export default Canvas
//# sourceMappingURL=Canvas.d.ts.map
