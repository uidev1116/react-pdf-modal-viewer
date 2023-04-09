import { Download, ZoomIn, ZoomOut } from './Actions'

import { Children, cloneElement, isValidElement } from 'react'

import type React from 'react'

export interface ToolbarProps {
  className?: string
  actionClassName?: string
  children?: React.ReactNode
}

const Toolbar = ({
  className = 'pdf-modal-viewer__toolbar',
  actionClassName = 'pdf-modal-viewer__action',
  children,
}: ToolbarProps) => (
  <div className={className}>
    {Children.map(
      children,
      (child) =>
        isValidElement(child) &&
        cloneElement(<div className={actionClassName} />, undefined, child)
    )}
  </div>
)

export default Object.assign(Toolbar, {
  Download,
  ZoomIn,
  ZoomOut,
})
