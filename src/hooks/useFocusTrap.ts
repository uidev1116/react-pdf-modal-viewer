import { RefObject, useEffect, useState, useCallback } from 'react'
import { createFocusTrap } from 'focus-trap'
import type {
  ActivateOptions,
  DeactivateOptions,
  FocusTrap,
  Options,
} from 'focus-trap'

export interface UseFocusTrapOptions extends Options {
  /**
   * Immediately activate the trap
   */
  immediate?: boolean
}

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
   * Activate the focus trap
   *
   * @see https://github.com/focus-trap/focus-trap#trapactivateactivateoptions
   * @param opts Activate focus trap options
   */
  activate: (opts?: ActivateOptions) => FocusTrap

  /**
   * Deactivate the focus trap
   *
   * @see https://github.com/focus-trap/focus-trap#trapdeactivatedeactivateoptions
   * @param opts Deactivate focus trap options
   */
  deactivate: (opts?: DeactivateOptions) => FocusTrap

  /**
   * Pause the focus trap
   *
   * @see https://github.com/focus-trap/focus-trap#trappause
   */
  pause: () => FocusTrap

  /**
   * Unpauses the focus trap
   *
   * @see https://github.com/focus-trap/focus-trap#trapunpause
   */
  unpause: () => FocusTrap
}

export const useFocusTrap = (
  ref: RefObject<HTMLElement>,
  options: UseFocusTrapOptions = {}
) => {
  let trap: FocusTrap

  const { immediate, ...focusTrapOptions } = options

  const [isActive, setisActive] = useState(false)
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

  useEffect(() => {
    if (!ref.current) {
      return
    }

    trap = createFocusTrap(ref.current, {
      ...focusTrapOptions,
      onActivate() {
        setisActive(true)
        if (options.onActivate) {
          options.onActivate()
        }
      },
      onDeactivate() {
        setisActive(false)
        if (options.onDeactivate) {
          options.onDeactivate()
        }
      },
    })

    if (immediate) {
      trap.activate()
    }

    return () => {
      trap.deactivate()
    }
  }, [ref])

  return {
    isActive,
    isPaused,
    activate,
    deactivate,
    pause,
    unpause,
  }
}
