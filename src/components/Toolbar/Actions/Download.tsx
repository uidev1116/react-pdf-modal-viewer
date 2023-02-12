import { useViewer } from '../../../hooks'

import type { ReactNode } from 'react'

interface DownloadProps {
  className?: string
  iconClassName?: string
  ariaLabel?: string
  children?: ReactNode
}

const Download = ({
  className = 'pdf-viewer__download',
  iconClassName = 'pdf-viewer__icon-download',
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
