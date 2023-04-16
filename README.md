# react-pdf-modal-viewer

PDF Viewer component by modal for React

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

#### via npm

```sh
npm install react-pdf-modal-viewer
```

#### via yarn

```sh
yarn add react-pdf-modal-viewer
```

## API documentation

### Examples

Here is a simple example of react-pdf-modal-viewer.

```tsx
import React, { useState, useCallback } from 'react'
import ReactDOM from 'react-dom/client'
import { Viewer, Toolbar, pdfjs } from 'react-pdf-modal-viewer'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.js`

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Open Viewer
      </button>

      <Viewer
        isOpen={isOpen}
        onClose={close}
        file="sample.pdf"
        options={{
          cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: true,
        }}
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
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

### Props

#### Viewer

| name                       | description                                                                                                                                                                                                                             | type                                                                                                         | default                         |
| :------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- | :------------------------------ |
| isOpen                     | Boolean describing if the modal should be shown or not.                                                                                                                                                                                 | boolean                                                                                                      |                                 |
| onClose                    | Specify a function to close modal.                                                                                                                                                                                                      | function                                                                                                     |                                 |
| container                  | Set parent element that the modal will be attached to.                                                                                                                                                                                  | HTMLElement                                                                                                  | document.body                   |
| file                       | What PDF should be displayed.                                                                                                                                                                                                           | string                                                                                                       |                                 |
| options                    | An object in which additional parameters to be passed to PDF.js can be defined. Please check [PDF.js documentation on DocumentInitParameters](https://mozilla.github.io/pdf.js/api/draft/module-pdfjsLib.html#~DocumentInitParameters). | DocumentInitParameters                                                                                       | {}                              |
| onAfterOpen                | Function that will be run after the modal has opened.                                                                                                                                                                                   | () => void                                                                                                   |                                 |
| onAfterClose               | Function that will be run after the modal has closed.                                                                                                                                                                                   | () => void                                                                                                   |                                 |
| shouldCloseOnBackdropClick | Boolean indicating if the backdrop should close the modal.                                                                                                                                                                              | boolean                                                                                                      | true                            |
| shouldCloseOnEsc           | Boolean indicating if pressing the esc key should close the modal.                                                                                                                                                                      | boolean                                                                                                      | true                            |
| id                         | Id attribute to be applied to the modal div.                                                                                                                                                                                            | string                                                                                                       |                                 |
| className                  | Class attribute to be applied to the modal div.                                                                                                                                                                                         | string                                                                                                       | 'pdf-modal-viewer               |
| backdropClassName          | Class attribute to be applied to the backdrop div.                                                                                                                                                                                      | string                                                                                                       | 'pdf-modal-viewer\_\_backdrop'  |
| dialogClassName            | Class attribute to be applied to the dialog div.                                                                                                                                                                                        | string                                                                                                       | 'pdf-modal-viewer\_\_dialog'    |
| bodyClassName              | Class attribute to be applied to the body div.                                                                                                                                                                                          | string                                                                                                       | 'pdf-modal-viewer\_\_body'      |
| closeButtonClassName       | Class attribute to be applied to the close button.                                                                                                                                                                                      | string                                                                                                       | 'pdf-modal-viewer\_\_close-btn' |
| preventScroll              | Boolean indicating if open, prevent scrolling.                                                                                                                                                                                          | boolean                                                                                                      | true                            |
| closeTimeout               | Number indicating the milliseconds to wait before closing the modal.                                                                                                                                                                    | number                                                                                                       | 0                               |
| error                      | What the component should display in case of an error.                                                                                                                                                                                  | string \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| RenderFunction \| undefined | "Failed to load PDF file."      |
| loading                    | What the component should display while loading.                                                                                                                                                                                        | string \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| RenderFunction \| undefined | "Loading PDF…"                  |
| noData                     | What the component should display in case of no data.                                                                                                                                                                                   | string \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| RenderFunction \| undefined | "No PDF file specified."        |
| role                       | Role attribute of the modal.                                                                                                                                                                                                            | string                                                                                                       | 'dialog'                        |
| ariaModal                  | Aria Modal attribute of the modal.                                                                                                                                                                                                      | boolean \| 'false' \| 'true'                                                                                 | true                            |
