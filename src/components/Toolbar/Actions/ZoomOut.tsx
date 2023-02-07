import { useCallback } from 'react'
import { useViewer } from '../../../hooks'

interface ZoomOutProps {
  className?: string
  iconClassName?: string
  ariaLabel?: string
  step?: number
  min?: number
}

const ZoomOut = ({
  className = 'pdf-viewer__zoom-out',
  iconClassName = 'pdf-viewer__icon-zoom-out',
  ariaLabel = 'Zoom out PDF',
  step = 0.1,
  min = 0.1,
}: ZoomOutProps) => {
  const { setScale } = useViewer()

  const handleClick = useCallback(() => {
    setScale((prevScale) => Math.max(prevScale - step, min))
  }, [setScale, step, min])

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

export default ZoomOut
