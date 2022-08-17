import { useState, useCallback } from 'react'
import { createFocusTrap } from 'focus-trap'

import type {
  ActivateOptions,
  DeactivateOptions,
  FocusTrap,
  Options,
} from 'focus-trap'

export interface UseFocusTrapReturn {
  /**
   * Indicates if the focus trap is currently active
   */
  isActive: boolean

  /**
   * Indicates if the focus trap is currently paused
   */
  isPaused: boolean

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
  let trap: FocusTrap

  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const activate = useCallback(
    (opts?: ActivateOptions) => trap?.activate(opts),
    []
  )

  const deactivate = useCallback(
    (opts?: DeactivateOptions) => trap?.deactivate(opts),
    []
  )

  const pause = useCallback(() => {
    if (trap) {
      trap.pause()
      setIsPaused(true)
    }
  }, [])

  const unpause = useCallback(() => {
    if (trap) {
      trap.unpause()
      setIsPaused(false)
    }
  }, [])

  const setRef = useCallback((node: HTMLElement | null) => {
    if (node === null) {
      return
    }

    trap = createFocusTrap(node, {
      ...options,
      onActivate() {
        setIsActive(true)
        if (options.onActivate) {
          options.onActivate()
        }
      },
      onDeactivate() {
        setIsActive(false)
        if (options.onDeactivate) {
          options.onDeactivate()
        }
      },
    })
  }, [])

  return {
    isActive,
    isPaused,
    setRef,
    activate,
    deactivate,
    pause,
    unpause,
  }
}
