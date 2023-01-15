import { useViewer } from '../../../hooks'

interface DownloadProps {
  className?: string
  iconClassName?: string
  aria?: {
    label: string
  }
}

const Download = ({
  className = 'pdf-viewer__download',
  iconClassName = 'pdf-viewer__icon-download',
  aria = { label: 'Download PDF' },
}: DownloadProps) => {
  const { file } = useViewer()

  return (
    <a href={file} download className={className} aria-label={aria.label}>
      <span className={iconClassName} />
    </a>
  )
}

export default Download
