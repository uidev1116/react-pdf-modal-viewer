import { useState, useCallback } from 'react'
import { Viewer, pdfjs } from '../../src'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.js`

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  return (
    <div>
      <button type="button" onClick={openModal}>
        Open Viewer
      </button>
      <Viewer
        isOpen={isOpen}
        onRequestClose={closeModal}
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
