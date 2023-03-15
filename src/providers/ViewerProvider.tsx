import { createContext, useMemo } from 'react'

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

const ViewerContext = createContext<ViewerContextInterface>({
  file: '',
  numPages: null,
  inView: null,
  setInView: () => {},
  scale: 1.0,
  setScale: () => {},
  meta: {
    fileName: '',
    fileSize: {
      mb: undefined,
      kb: undefined,
      b: 0,
    },
    creationDate: null,
    modificationDate: null,
  },
})

const ViewerProvider = ({
  file,
  numPages,
  inView,
  setInView,
  scale,
  setScale,
  meta,
  children,
}: ViewerProviderProps) => {
  const value = useMemo(
    () => ({ file, numPages, inView, setInView, scale, setScale, meta }),
    [file, numPages, inView, setInView, scale, setScale, meta]
  )

  return (
    <ViewerContext.Provider value={value}>{children}</ViewerContext.Provider>
  )
}

export { ViewerProvider, ViewerContext }
