import { createContext, useMemo } from 'react'

import type { ReactNode, Dispatch, SetStateAction } from 'react'
import { ViewerProps } from '../components/Viewer'

export interface ViewerContextInterface extends Pick<ViewerProps, 'file'> {
  numPages: number | null
  inView: number | null
  setInView: Dispatch<SetStateAction<number>>
  scale: number
  setScale: Dispatch<SetStateAction<number>>
}

export interface ViewerProviderProps
  extends Pick<
    ViewerContextInterface,
    'file' | 'numPages' | 'inView' | 'setInView' | 'scale' | 'setScale'
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
})

const ViewerProvider = ({
  file,
  numPages,
  inView,
  setInView,
  scale,
  setScale,
  children,
}: ViewerProviderProps) => {
  const value = useMemo(
    () => ({ file, numPages, inView, setInView, scale, setScale }),
    [file, numPages, inView, setInView, scale, setScale]
  )

  return (
    <ViewerContext.Provider value={value}>{children}</ViewerContext.Provider>
  )
}

export { ViewerProvider, ViewerContext }
