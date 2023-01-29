import React, { useState, useCallback } from 'react'
import { Viewer, pdfjs } from '../../src'

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
        loading={<div>Please wait!</div>}
        noData={<div>Please select a page.</div>}
      >
        <Viewer.Thumbnail />
        <Viewer.Canvas />
        <Viewer.Toolbar>
          <Viewer.Toolbar.Download />
          <Viewer.Toolbar.Download />
        </Viewer.Toolbar>
      </Viewer>
      <a href="#">テスト</a>
      <a href="#">テスト</a>
      <a href="#">テスト</a>
    </div>
  )
}

export default App
