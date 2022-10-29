import { useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'

import PdfDocument from './PdfDocument'

import {
  useBodyScrollLock,
  useFocusTrap,
  useAriaHidden,
  useFirstMountState,
} from '../hooks'

/* eslint @typescript-eslint/no-unused-vars: 0 */
/* eslint no-lonely-if: 0 */

import type { DocumentInitParameters } from 'pdfjs-dist/types/src/display/api'

export interface ViewerProps {
  isOpen: boolean
  onClose: () => void
  container?: HTMLElement
  file: string | Uint8Array
  onAfterOpen?: () => void
  onAfterClose?: () => void
  onBackdropClick?: () => void
  id?: string
  className?: string
  backdropClassName?: string
  dialogClassName?: string
  documentClassName?: string
  thumbnailClassName?: string
  canvasClassName?: string
  closeButtonClassName?: string
  role?: string
  preventScroll?: boolean
  ariaModal?: boolean | 'false' | 'true'
  options?: DocumentInitParameters
}

const Viewer = ({
  isOpen,
  onClose = () => {},
  container = document.body,
  onAfterOpen = () => {},
  onAfterClose = () => {},
  onBackdropClick = () => {},
  id,
  className = 'pdf-viewer',
  backdropClassName = 'pdf-viewer__backdrop',
  dialogClassName = 'pdf-viewer__dialog',
  documentClassName = 'pdf-viewer__document',
  thumbnailClassName = 'pdf-viewer__thumbnail',
  canvasClassName = 'pdf-viewer__canvas',
  closeButtonClassName = 'pdf-viewer__close-btn',
  role = 'dialog',
  preventScroll = true,
  ariaModal = true,
  file,
  options = {},
}: ViewerProps) => {
  const isFirstMount = useFirstMountState()

  const {
    setRef: setBodyScrollLockRef,
    disableScroll,
    enableScroll,
  } = useBodyScrollLock()

  const {
    setRef: setTrapRef,
    activate,
    deactivate,
  } = useFocusTrap({
    clickOutsideDeactivates: true,
    escapeDeactivates: true,
    returnFocusOnDeactivate: true,
    onDeactivate: onClose,
  })

  const { setRef: setAriaHiddenRef, hide, unhide } = useAriaHidden()

  const setRefs = useCallback(
    (node: HTMLElement | null) => {
      setBodyScrollLockRef(node)
      setTrapRef(node)
      setAriaHiddenRef(node)
    },
    [setBodyScrollLockRef, setTrapRef, setAriaHiddenRef]
  )

  useEffect(() => {
    if (isOpen) {
      if (preventScroll) {
        disableScroll()
      }
      activate()
      hide()
      if (!isFirstMount) {
        onAfterOpen()
      }
    } else {
      if (preventScroll) {
        enableScroll()
      }
      deactivate()
      unhide()
      if (!isFirstMount) {
        onAfterClose()
      }
    }
  }, [
    isOpen,
    preventScroll,
    isFirstMount,
    disableScroll,
    enableScroll,
    activate,
    deactivate,
    hide,
    unhide,
    onAfterOpen,
    onAfterClose,
  ])

  if (!isOpen) {
    return null
  }

  return createPortal(
    <div className={className} id={id}>
      <div // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        className={backdropClassName}
        onClick={onBackdropClick}
      >
        <div
          ref={setRefs}
          tabIndex={-1}
          className={dialogClassName}
          role={role}
          aria-modal={ariaModal}
        >
          <PdfDocument
            file={file}
            options={options}
            className={documentClassName}
            thumbnailClassName={thumbnailClassName}
            canvasClassName={canvasClassName}
          />
          <button
            type="button"
            className={closeButtonClassName}
            aria-label="Close Viewer"
            onClick={onClose}
          />
        </div>
      </div>
    </div>,
    container
  )
}

export default Viewer
