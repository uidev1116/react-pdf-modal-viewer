import { useContext } from 'react'

import { ViewerContext } from '../providers/ViewerProvider'

export const useViewer = () => useContext(ViewerContext)
