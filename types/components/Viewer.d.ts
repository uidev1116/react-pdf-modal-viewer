import type { ReactNode } from 'react'
import type { DocumentProps } from 'react-pdf'
import type { DocumentInitParameters } from 'pdfjs-dist/types/src/display/api'
export interface ViewerProps
  extends Pick<DocumentProps, 'error' | 'loading' | 'noData'> {
  isOpen: boolean
  onClose: () => void
  container?: HTMLElement
  file: string
  onAfterOpen?: () => void
  onAfterClose?: () => void
  shouldCloseOnBackdropClick?: boolean
  shouldCloseOnEsc?: boolean
  id?: string
  className?: string
  backdropClassName?: string
  dialogClassName?: string
  bodyClassName?: string
  closeButtonClassName?: string
  preventScroll?: boolean
  closeTimeout?: number
  role?: string
  ariaModal?: boolean | 'false' | 'true'
  options?: DocumentInitParameters
  children?: ReactNode
}
declare const _default: (({
  isOpen,
  onClose,
  container,
  onAfterOpen,
  onAfterClose,
  shouldCloseOnBackdropClick,
  shouldCloseOnEsc,
  id,
  className,
  backdropClassName,
  dialogClassName,
  bodyClassName,
  closeButtonClassName,
  error,
  loading,
  noData,
  preventScroll,
  closeTimeout,
  role,
  ariaModal,
  file,
  options,
  children,
}: ViewerProps) => import('react').ReactPortal | null) & {
  Canvas: ({
    className,
    error,
    loading,
    noData,
  }: import('./Canvas/CanvasView').CanvasViewProps) => JSX.Element
  Thumbnail: ({
    className,
    error,
    loading,
    noData,
  }: import('./Thumbnail/ThumbnailView').ThumbnailViewProps) => JSX.Element
  Meta: ({ className, custom }: import('./Meta/Meta').MetaProps) => JSX.Element
  Toolbar: (({
    className,
    actionClassName,
    children,
  }: import('./Toolbar/Toolbar').ToolbarProps) => JSX.Element) & {
    Download: ({
      className,
      iconClassName,
      ariaLabel,
      children,
    }: import('./Toolbar/Actions/Download').DownloadProps) => JSX.Element
    ZoomIn: ({
      className,
      iconClassName,
      ariaLabel,
      step,
      max,
      children,
    }: import('./Toolbar/Actions/ZoomIn').ZoomInProps) => JSX.Element
    ZoomOut: ({
      className,
      iconClassName,
      ariaLabel,
      step,
      min,
      children,
    }: import('./Toolbar/Actions/ZoomOut').ZoomOutProps) => JSX.Element
  }
}
export default _default
//# sourceMappingURL=Viewer.d.ts.map
