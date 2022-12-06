import { useRef } from 'react'

import { useViewer } from '../hooks'
import { range } from '../utils'
import Canvas from './Canvas'

export interface CanvasViewProps {
  className?: string
}

const CanvasView = ({ className = 'pdf-viewer__canvas' }: CanvasViewProps) => {
  const { numPages, setInView } = useViewer()
  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <div ref={ref} className={className}>
      {numPages &&
        range(1, numPages).map((pageNumber) => (
          <Canvas
            inViewRoot={ref.current}
            key={`canvas_${pageNumber}`}
            pageNumber={pageNumber}
            onInViewChange={() => {
              setInView(pageNumber)
            }}
          />
        ))}
    </div>
  )
}

export default CanvasView
