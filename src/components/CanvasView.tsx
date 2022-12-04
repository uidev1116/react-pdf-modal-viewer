import { useRef } from 'react'

import { range } from '../utils'
import Canvas from './Canvas'

export interface CanvasViewProps {
  className?: string
  numPages?: number
  onInViewChange?: (pageNumber: number) => void
}

const CanvasView = ({
  className = 'pdf-viewer__canvas',
  numPages = 1,
  onInViewChange = () => {},
}: CanvasViewProps) => {
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
              onInViewChange(pageNumber)
            }}
          />
        ))}
    </div>
  )
}

export default CanvasView
