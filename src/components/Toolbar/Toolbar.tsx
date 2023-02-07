import { Download, ZoomIn, ZoomOut } from './Actions'

import { Children, cloneElement, isValidElement } from 'react'

import type { ReactNode } from 'react'

export interface ToolbarProps {
  className?: string
  actionClassName?: string
  children?: ReactNode
}

const Toolbar = ({
  className = 'pdf-viewer__toolbar',
  actionClassName = 'pdf-viewer__action',
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

Toolbar.Download = Download
Toolbar.ZoomIn = ZoomIn
Toolbar.ZoomOut = ZoomOut

export default Toolbar
