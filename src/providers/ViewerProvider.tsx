import { useState, createContext, useMemo } from 'react'

import type { ReactNode } from 'react'

export interface ViewerContextInterface {
  numPages: number | null
  setNumPages: (numPages: number) => void
  inView: number | null
  setInView: (inView: number) => void
}

export interface ViewerProviderProps {
  children?: ReactNode
}

const ViewerContext = createContext<ViewerContextInterface>({
  numPages: null,
  setNumPages: () => {},
  inView: null,
  setInView: () => {},
})

const ViewerProvider = ({ children }: ViewerProviderProps) => {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [inView, setInView] = useState<number | null>(null)

  const value = useMemo(
    () => ({ numPages, setNumPages, inView, setInView }),
    [numPages, inView]
  )

  return (
    <ViewerContext.Provider value={value}>{children}</ViewerContext.Provider>
  )
}

export { ViewerProvider, ViewerContext }
