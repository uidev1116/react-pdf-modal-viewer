import { Page } from 'react-pdf'
import { useInView } from 'react-intersection-observer'

export interface CanvasProps {
  inViewRoot: HTMLDivElement | null
  pageNumber: number
  onInViewChange?: (inView: boolean, entry: IntersectionObserverEntry) => void
}

const Canvas = ({
  inViewRoot,
  pageNumber,
  onInViewChange = () => {},
}: CanvasProps) => {
  const { ref: setInViewRef } = useInView({
    root: inViewRoot,
    onChange: onInViewChange,
  })

  return (
    <div id={`page-${pageNumber}`}>
      <Page canvasRef={setInViewRef} pageNumber={pageNumber} />
    </div>
  )
}

export default Canvas
