import { useCallback, useRef, useEffect } from 'react'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

import type { BodyScrollOptions } from 'body-scroll-lock'

export interface UseBodyScrollLockReturn {
  /**
   * set callback ref
   */
  setRef: (node: HTMLElement | null) => void

  /**
   * disable body element scroll
   *
   * @see https://github.com/willmcpo/body-scroll-lock#options
   * @param opts Body scroll options
   */
  disable: (opts?: BodyScrollOptions) => void

  /**
   * enable body element scroll
   *
   */
  enable: () => void
}

export const useBodyScrollLock = (): UseBodyScrollLockReturn => {
  const targetRef = useRef<HTMLElement | null>(null)

  const disable = useCallback((opts?: BodyScrollOptions) => {
    if (targetRef.current) {
      disableBodyScroll(targetRef.current, opts)
    }
  }, [])

  const enable = useCallback(() => {
    if (targetRef.current) {
      enableBodyScroll(targetRef.current)
    }
  }, [])

  useEffect(
    () => () => {
      clearAllBodyScrollLocks()
    },
    []
  )

  const setRef = useCallback((node: HTMLElement | null) => {
    if (node === null) {
      return
    }
    targetRef.current = node
  }, [])

  return {
    setRef,
    disable,
    enable,
  }
}
