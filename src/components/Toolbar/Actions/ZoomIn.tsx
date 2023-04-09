import { useCallback } from 'react'
import { useViewer } from '../../../hooks'

import type React from 'react'

export interface ZoomInProps {
  className?: string
  iconClassName?: string
  ariaLabel?: string
  step?: number
  max?: number
  children?: React.ReactNode
}

const ZoomIn = ({
  className = 'pdf-modal-viewer__zoom-in',
  iconClassName = 'pdf-modal-viewer__icon-zoom-in',
  ariaLabel = 'Zoom in PDF',
  step = 0.1,
  max = 2.0,
  children,
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
      {children || <span className={iconClassName} />}
    </button>
  )
}

export default ZoomIn
