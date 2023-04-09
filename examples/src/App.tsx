import React, { useState, useCallback } from 'react'
import { Viewer, Toolbar, pdfjs } from '../../src'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.js`

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = useCallback(() => {
    setIsOpen(false)
    console.log('close modal')
  }, [setIsOpen])

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          console.log('open button clicked!')
          setIsOpen(true)
        }}
      >
        Open Viewer
      </button>

      <Viewer
        isOpen={isOpen}
        onClose={closeModal}
        onAfterOpen={() => {
          console.log('after open!')
        }}
        onAfterClose={() => {
          console.log('after close!')
        }}
        file="/examples/pdf/sample.pdf"
        options={{
          cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: true,
        }}
        id="hoge"
        error={<div>An error occurred!</div>}
        loading={
          <div
            className="spinner-border text-light position-absolute top-0 start-0 end-0 bottom-0 m-auto"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        }
        noData={<div>Please select a page.</div>}
      >
        <Viewer.Meta />
        <Viewer.Thumbnail />
        <Viewer.Canvas />
        <Toolbar>
          <Toolbar.ZoomIn />
          <Toolbar.ZoomOut />
          <Toolbar.Download />
        </Toolbar>
      </Viewer>
      <button type="button" className="btn btn-primary">
        FocusTrapテスト
      </button>
      <button type="button" className="btn btn-primary">
        FocusTrapテスト
      </button>
      <button type="button" className="btn btn-primary">
        FocusTrapテスト
      </button>
    </div>
  )
}

export default App
