import { useState, createContext, useMemo } from 'react'

import type { ReactNode } from 'react'
import { ViewerProps } from '../components/Viewer'

export interface ViewerContextInterface extends Pick<ViewerProps, 'file'> {
  numPages: number | null
  setNumPages: (numPages: number) => void
  inView: number | null
  setInView: (inView: number) => void
}

export interface ViewerProviderProps extends Pick<ViewerProps, 'file'> {
  children?: ReactNode
}

const ViewerContext = createContext<ViewerContextInterface>({
  file: '',
  numPages: null,
  setNumPages: () => {},
  inView: null,
  setInView: () => {},
})

const ViewerProvider = ({ file, children }: ViewerProviderProps) => {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [inView, setInView] = useState<number | null>(null)

  const value = useMemo(
    () => ({ file, numPages, setNumPages, inView, setInView }),
    [file, numPages, inView]
  )

  return (
    <ViewerContext.Provider value={value}>{children}</ViewerContext.Provider>
  )
}

export { ViewerProvider, ViewerContext }
