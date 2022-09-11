import { useRef } from 'react'

// eslint-disable-next-line import/prefer-default-export
export const useFirstMountState = (): boolean => {
  const isFirst = useRef(true)

  if (isFirst.current) {
    isFirst.current = false

    return true
  }

  return isFirst.current
}
