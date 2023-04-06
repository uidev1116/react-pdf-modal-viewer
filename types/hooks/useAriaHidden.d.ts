export interface UseAriaHiddenReturn {
  /**
   * Set callback ref of target element
   */
  setRef: (node: HTMLElement | null) => void
  /**
   * Set callback ref of parent element
   */
  setParentRef: (node: HTMLElement | null) => void
  /**
   * Marks everything as aria-hidden
   *
   */
  hide: () => void
  /**
   * Unmarks everything as aria-hidden
   *
   */
  unhide: () => void
}
export declare const useAriaHidden: (markerName?: string) => UseAriaHiddenReturn
//# sourceMappingURL=useAriaHidden.d.ts.map
