import { useViewer } from '../../../hooks'

import type { ReactNode } from 'react'

export interface DownloadProps {
  className?: string
  iconClassName?: string
  ariaLabel?: string
  children?: ReactNode
}

const Download = ({
  className = 'pdf-modal-viewer__download',
  iconClassName = 'pdf-modal-viewer__icon-download',
  ariaLabel = 'Download PDF',
  children,
}: DownloadProps) => {
  const { file } = useViewer()

  return (
    <a href={file} download className={className} aria-label={ariaLabel}>
      {children || <span className={iconClassName} />}
    </a>
  )
}

export default Download
