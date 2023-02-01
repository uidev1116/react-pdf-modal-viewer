import { Page } from 'react-pdf'
import { useInView } from 'react-intersection-observer'

import type { CanvasViewProps } from './CanvasView'

export interface CanvasProps
  extends Pick<CanvasViewProps, 'error' | 'loading' | 'noData'> {
  inViewRoot: HTMLDivElement | null
  pageNumber: number
  onInViewChange?: (inView: boolean, entry: IntersectionObserverEntry) => void
}

const Canvas = ({
  inViewRoot,
  pageNumber,
  onInViewChange = () => {},
  error,
  loading,
  noData,
}: CanvasProps) => {
  const { ref: setInViewRef } = useInView({
    root: inViewRoot,
    onChange: onInViewChange,
  })

  return (
    <div id={`page-${pageNumber}`}>
      <Page
        canvasRef={setInViewRef}
        pageNumber={pageNumber}
        error={error}
        loading={loading}
        noData={noData}
      />
    </div>
  )
}

export default Canvas
