import { Page } from 'react-pdf'
import { useInView } from 'react-intersection-observer'

import type { PageProps } from 'react-pdf'
import type { CanvasViewProps } from './CanvasView'

export interface CanvasProps
  extends Pick<CanvasViewProps, 'error' | 'loading' | 'noData'>,
    Pick<PageProps, 'scale'> {
  inViewRoot: HTMLDivElement | null
  pageNumber: number
  onInViewChange?: (inView: boolean, entry: IntersectionObserverEntry) => void
}

const Canvas = ({
  inViewRoot,
  pageNumber,
  onInViewChange = () => {},
  scale,
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
        scale={scale}
      />
    </div>
  )
}

export default Canvas
