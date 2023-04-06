import type { ReactNode } from 'react'
import type { ViewerProps } from './Viewer'
export interface ViewerCoreProps
  extends Pick<
    ViewerProps,
    'file' | 'options' | 'error' | 'loading' | 'noData'
  > {
  className: string
  children?: ReactNode
}
declare const ViewerCore: ({
  file,
  options,
  className,
  error,
  loading,
  noData,
  children,
}: ViewerCoreProps) => JSX.Element
export default ViewerCore
//# sourceMappingURL=ViewerCore.d.ts.map
