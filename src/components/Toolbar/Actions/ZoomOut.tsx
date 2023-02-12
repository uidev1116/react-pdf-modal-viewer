import { useCallback } from 'react'
import { useViewer } from '../../../hooks'

import type { ReactNode } from 'react'

interface ZoomOutProps {
  className?: string
  iconClassName?: string
  ariaLabel?: string
  step?: number
  min?: number
  children?: ReactNode
}

const ZoomOut = ({
  className = 'pdf-viewer__zoom-out',
  iconClassName = 'pdf-viewer__icon-zoom-out',
  ariaLabel = 'Zoom out PDF',
  step = 0.1,
  min = 0.1,
  children,
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
      {children || <span className={iconClassName} />}
    </button>
  )
}

export default ZoomOut
