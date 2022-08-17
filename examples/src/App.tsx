import { useState } from 'react'
import { Viewer, pdfjs } from '../../src'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.js`

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  // const closeModal = useCallback(() => {
  //   setIsOpen(false)
  // }, [setIsOpen])

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        Open Viewer
      </button>
      <Viewer
        isOpen={isOpen}
        onClose={() => {}}
        file="/examples/pdf/sample.pdf"
        options={{
          cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: true,
        }}
      />
    </div>
  )
}

export default App
