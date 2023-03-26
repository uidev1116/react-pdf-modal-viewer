import { useCallback } from 'react'
import { Page } from 'react-pdf'
import { useInView } from 'react-intersection-observer'

import type { PageProps, PDFPageProxy } from 'react-pdf'
import type { CanvasViewProps } from './CanvasView'

export interface CanvasProps
  extends Pick<CanvasViewProps, 'error' | 'loading' | 'noData'>,
    Pick<PageProps, 'scale' | 'onLoadSuccess' | 'width'> {
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
  onLoadSuccess = () => {},
  width,
}: CanvasProps) => {
  const { ref: setInViewRef } = useInView({
    root: inViewRoot,
    onChange: onInViewChange,
  })

  const handleLoadSuccess = useCallback(
    (page: PDFPageProxy) => {
      onLoadSuccess(page)
    },
    [onLoadSuccess]
  )

  return (
    <div id={`page-${pageNumber}`}>
      <Page
        canvasRef={setInViewRef}
        pageNumber={pageNumber}
        error={error}
        loading={loading}
        noData={noData}
        scale={scale}
        onLoadSuccess={handleLoadSuccess}
        width={width}
      />
    </div>
  )
}

export default Canvas
