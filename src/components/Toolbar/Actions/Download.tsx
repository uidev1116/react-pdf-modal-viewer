import { useViewer } from '../../../hooks'

interface DownloadProps {
  className?: string
}

const Download = ({
  className = 'pdf-viewer__icon-download',
}: DownloadProps) => {
  const { file } = useViewer()

  return <a href={file} download className={className} />
}

export default Download
