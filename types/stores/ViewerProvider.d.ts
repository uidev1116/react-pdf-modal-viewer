import type { ReactNode, Dispatch, SetStateAction } from 'react'
import type { ViewerProps } from '../components/Viewer'
import type { Meta } from '../types/meta'
export interface ViewerContextInterface extends Pick<ViewerProps, 'file'> {
  numPages: number | null
  inView: number | null
  setInView: Dispatch<SetStateAction<number | null>>
  scale: number
  setScale: Dispatch<SetStateAction<number>>
  meta: Meta
}
export interface ViewerProviderProps
  extends Pick<
    ViewerContextInterface,
    'file' | 'numPages' | 'inView' | 'setInView' | 'scale' | 'setScale' | 'meta'
  > {
  children?: ReactNode
}
declare const ViewerContext: import('react').Context<ViewerContextInterface>
declare const ViewerProvider: ({
  file,
  numPages,
  inView,
  setInView,
  scale,
  setScale,
  meta,
  children,
}: ViewerProviderProps) => JSX.Element
export { ViewerProvider, ViewerContext }
//# sourceMappingURL=ViewerProvider.d.ts.map
