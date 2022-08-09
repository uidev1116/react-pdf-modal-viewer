import { useState, useCallback } from 'react'
import Modal from 'react-modal'

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
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <Viewer
          file="/examples/pdf/sample.pdf"
          options={{
            cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
            cMapPacked: true,
          }}
        />
      </Modal>
    </div>
  )
}

export default App
