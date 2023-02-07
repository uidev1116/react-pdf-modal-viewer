import { useCallback } from 'react'
import { useViewer } from '../../../hooks'

interface ZoomInProps {
  className?: string
  iconClassName?: string
  ariaLabel?: string
  step?: number
  max?: number
}

const ZoomIn = ({
  className = 'pdf-viewer__zoom-in',
  iconClassName = 'pdf-viewer__icon-zoom-in',
  ariaLabel = 'Zoom in PDF',
  step = 0.1,
  max = 2.0,
}: ZoomInProps) => {
  const { setScale } = useViewer()

  const handleClick = useCallback(() => {
    setScale((prevScale) => Math.min(prevScale + step, max))
  }, [setScale, step, max])

  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      <span className={iconClassName} />
    </button>
  )
}

export default ZoomIn
