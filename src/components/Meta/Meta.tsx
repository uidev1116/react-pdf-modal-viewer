import { isValidElement } from 'react'
import { useViewer } from '../../hooks'

import type { Meta as MetaType } from '../../types/meta'

export interface MetaProps {
  className?: string
  custom?: (meta: MetaType) => React.ReactNode
}

const Meta = ({ className = 'pdf-modal-viewer__meta', custom }: MetaProps) => {
  const { meta } = useViewer()

  const renderFileSize = () => {
    const { fileSize } = meta

    if (fileSize.mb) {
      return `${(+fileSize.mb.toPrecision(3)).toLocaleString()} MB`
    }
    if (fileSize.kb) {
      return `${(+fileSize.kb.toPrecision(3)).toLocaleString()} KB`
    }
    return `${fileSize.b.toLocaleString()} B`
  }

  return (
    <div className={className}>
      {typeof custom === 'function' && isValidElement(custom(meta)) ? (
        custom(meta)
      ) : (
        <span>{`${meta.fileName}（${renderFileSize()}）`}</span>
      )}
    </div>
  )
}

export default Meta
