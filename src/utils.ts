// eslint-disable-next-line import/prefer-default-export
export const range = (start: number, end: number, step: number = 1) =>
  Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step)
