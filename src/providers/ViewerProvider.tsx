import { createContext, useMemo } from 'react'

import type { ReactNode } from 'react'
import { ViewerProps } from '../components/Viewer'

export interface ViewerContextInterface extends Pick<ViewerProps, 'file'> {
  numPages: number | null
  inView: number | null
  setInView: (inView: number) => void
}

export interface ViewerProviderProps
  extends Pick<
    ViewerContextInterface,
    'file' | 'numPages' | 'inView' | 'setInView'
  > {
  children?: ReactNode
}

const ViewerContext = createContext<ViewerContextInterface>({
  file: '',
  numPages: null,
  inView: null,
  setInView: () => {},
})

const ViewerProvider = ({
  file,
  numPages,
  inView,
  setInView,
  children,
}: ViewerProviderProps) => {
  const value = useMemo(
    () => ({ file, numPages, inView, setInView }),
    [file, numPages, inView, setInView]
  )

  return (
    <ViewerContext.Provider value={value}>{children}</ViewerContext.Provider>
  )
}

export { ViewerProvider, ViewerContext }
