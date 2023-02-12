export const range = (start: number, end: number, step: number = 1) =>
  Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step)

export const scrollTo = (selectorOrElement: string | HTMLElement | Element) => {
  const element =
    typeof selectorOrElement === 'string'
      ? document.querySelector(selectorOrElement)
      : selectorOrElement
  element?.scrollIntoView()
}
