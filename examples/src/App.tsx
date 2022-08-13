import { useState, useCallback } from 'react'
import Modal, { Styles } from 'react-modal'

import { Viewer, pdfjs } from '../../src'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.js`

const styles: Styles = {
  content: {
    position: 'absolute',
    inset: '40px',
    border: '1px solid rgb(204, 204, 204)',
    background: 'rgb(255, 255, 255)',
    overflow: 'auto',
    borderRadius: 'auto',
    outline: 'none',
    padding: 'none',
  },
}

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
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={styles}>
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
