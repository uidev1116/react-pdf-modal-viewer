import { useContext } from 'react'

import { ViewerContext } from '../stores/ViewerProvider'

export const useViewer = () => useContext(ViewerContext)
