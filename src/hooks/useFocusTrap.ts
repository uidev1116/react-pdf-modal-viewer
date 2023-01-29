import { useCallback, useRef, useEffect } from 'react'
import { createFocusTrap } from 'focus-trap'

import type {
  ActivateOptions,
  DeactivateOptions,
  FocusTrap,
  Options,
} from 'focus-trap'

export interface UseFocusTrapReturn {
  /**
   * set callback ref
   */
  setRef: (node: HTMLElement | null) => void

  /**
   * Activate the focus trap
   *
   * @see https://github.com/focus-trap/focus-trap#trapactivateactivateoptions
   * @param opts Activate focus trap options
   */
  activate: (opts?: ActivateOptions) => void

  /**
   * Deactivate the focus trap
   *
   * @see https://github.com/focus-trap/focus-trap#trapdeactivatedeactivateoptions
   * @param opts Deactivate focus trap options
   */
  deactivate: (opts?: DeactivateOptions) => void

  /**
   * Pause the focus trap
   *
   * @see https://github.com/focus-trap/focus-trap#trappause
   */
  pause: () => void

  /**
   * Unpauses the focus trap
   *
   * @see https://github.com/focus-trap/focus-trap#trapunpause
   */
  unpause: () => void
}

export const useFocusTrap = (options: Options = {}): UseFocusTrapReturn => {
  const trapRef = useRef<FocusTrap | null>(null)

  const activate = useCallback((opts?: ActivateOptions) => {
    trapRef.current?.activate(opts)
  }, [])

  const deactivate = useCallback((opts?: DeactivateOptions) => {
    trapRef.current?.deactivate(opts)
  }, [])

  const pause = useCallback(() => {
    if (trapRef.current) {
      trapRef.current.pause()
    }
  }, [])

  const unpause = useCallback(() => {
    if (trapRef.current) {
      trapRef.current.unpause()
    }
  }, [])

  const setRef = useCallback(
    (node: HTMLElement | null) => {
      if (node === null) {
        return
      }

      trapRef.current = createFocusTrap(node, options)
    },
    [options] // eslint-disable-line
  )

  useEffect(
    () => () => {
      deactivate()
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  )

  return {
    setRef,
    activate,
    deactivate,
    pause,
    unpause,
  }
}
