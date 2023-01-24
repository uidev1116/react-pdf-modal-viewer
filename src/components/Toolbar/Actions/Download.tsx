import { useViewer } from '../../../hooks'

interface DownloadProps {
  className?: string
  iconClassName?: string
  ariaLabel?: string
}

const Download = ({
  className = 'pdf-viewer__download',
  iconClassName = 'pdf-viewer__icon-download',
  ariaLabel = 'Download PDF',
}: DownloadProps) => {
  const { file } = useViewer()

  return (
    <a href={file} download className={className} aria-label={ariaLabel}>
      <span className={iconClassName} />
    </a>
  )
}

export default Download
