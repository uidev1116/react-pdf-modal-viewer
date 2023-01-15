import { Download } from './Actions'

import { Children, cloneElement, isValidElement } from 'react'

import type { ReactNode } from 'react'

export interface ToolbarProps {
  className?: string
  children?: ReactNode
}

const Toolbar = ({
  className = 'pdf-viewer__toolbar',
  children,
}: ToolbarProps) => (
  <div className={className}>
    {Children.map(
      children,
      (child) =>
        isValidElement(child) && cloneElement(<div />, undefined, child)
    )}
  </div>
)

Toolbar.Download = Download

export default Toolbar
