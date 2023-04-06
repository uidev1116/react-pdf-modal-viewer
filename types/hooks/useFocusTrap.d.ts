import type { ActivateOptions, DeactivateOptions, Options } from 'focus-trap'
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
export declare const useFocusTrap: (options?: Options) => UseFocusTrapReturn
//# sourceMappingURL=useFocusTrap.d.ts.map
