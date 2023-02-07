import { useRef } from 'react'

import type { PageProps } from 'react-pdf'

import { useViewer } from '../hooks'
import { range } from '../utils'
import Canvas from './Canvas'

export interface CanvasViewProps
  extends Pick<PageProps, 'error' | 'loading' | 'noData'> {
  className?: string
}

const CanvasView = ({
  className = 'pdf-viewer__canvas',
  error,
  loading,
  noData,
}: CanvasViewProps) => {
  const { numPages, setInView, scale } = useViewer()
  const ref = useRef<HTMLDivElement>(null)

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
          />
        ))}
    </div>
  )
}

export default CanvasView
