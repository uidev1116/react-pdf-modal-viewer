import { pdfjs } from 'react-pdf'

import { Viewer } from './components'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker',
  import.meta.url
).toString()

export { pdfjs, Viewer }
