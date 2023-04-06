import { useRef, useCallback, useState } from 'react'

import type { PageProps, PDFPageProxy } from 'react-pdf'

import { useViewer } from '../../hooks'
import { range } from '../../utils'
import Canvas from './Canvas'

export interface CanvasViewProps
  extends Pick<PageProps, 'error' | 'loading' | 'noData'> {
  className?: string
}

const CanvasView = ({
  className = 'pdf-modal-viewer__canvas',
  error,
  loading,
  noData,
}: CanvasViewProps) => {
  const { numPages, setInView, scale } = useViewer()
  const [width, setWidth] = useState<number | undefined>(undefined)
  const ref = useRef<HTMLDivElement>(null)

  const handleLoadSuccess = useCallback((page: PDFPageProxy) => {
    if (ref.current?.clientWidth) {
      setWidth(Math.min(ref.current?.clientWidth, page.width))
    }
  }, [])

  return (
    <div ref={ref} className={className}>
      {numPages &&
        range(1, numPages).map((pageNumber) => (
          <Canvas
            key={`canvas_${pageNumber}`}
            pageNumber={pageNumber}
            inViewRoot={ref.current}
            onInViewChange={() => {
              setInView(pageNumber)
            }}
            scale={scale}
            error={error}
            loading={loading}
            noData={noData}
            onLoadSuccess={handleLoadSuccess}
            width={width}
          />
        ))}
    </div>
  )
}

export default CanvasView
