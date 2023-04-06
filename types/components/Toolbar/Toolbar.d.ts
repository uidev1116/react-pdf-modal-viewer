import type { ReactNode } from 'react'
export interface ToolbarProps {
  className?: string
  actionClassName?: string
  children?: ReactNode
}
declare const _default: (({
  className,
  actionClassName,
  children,
}: ToolbarProps) => JSX.Element) & {
  Download: ({
    className,
    iconClassName,
    ariaLabel,
    children,
  }: import('./Actions/Download').DownloadProps) => JSX.Element
  ZoomIn: ({
    className,
    iconClassName,
    ariaLabel,
    step,
    max,
    children,
  }: import('./Actions/ZoomIn').ZoomInProps) => JSX.Element
  ZoomOut: ({
    className,
    iconClassName,
    ariaLabel,
    step,
    min,
    children,
  }: import('./Actions/ZoomOut').ZoomOutProps) => JSX.Element
}
export default _default
//# sourceMappingURL=Toolbar.d.ts.map
