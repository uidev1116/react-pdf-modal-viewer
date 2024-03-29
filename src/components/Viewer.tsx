import { useState, useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import ViewerCore from './ViewerCore'
import { Canvas } from './Canvas' // eslint-disable-line
import { Thumbnail } from './Thumbnail'
import { Meta } from './Meta'

import {
  useBodyScrollLock,
  useFocusTrap,
  useAriaHidden,
  useFirstMountState,
} from '../hooks'

import type React from 'react'
import type { DocumentProps } from 'react-pdf'
import type { DocumentInitParameters } from 'pdfjs-dist/types/src/display/api'

export interface ViewerProps
  extends Pick<DocumentProps, 'error' | 'loading' | 'noData'> {
  isOpen: boolean
  onClose: () => void
  container?: HTMLElement
  file: string
  onAfterOpen?: () => void
  onAfterClose?: () => void
  shouldCloseOnBackdropClick?: boolean
  shouldCloseOnEsc?: boolean
  id?: string
  className?: string
  backdropClassName?: string
  dialogClassName?: string
  bodyClassName?: string
  closeButtonClassName?: string
  preventScroll?: boolean
  closeTimeout?: number
  role?: string
  ariaModal?: boolean | 'false' | 'true'
  options?: DocumentInitParameters
  children?: React.ReactNode
}

const Viewer = ({
  isOpen,
  onClose,
  container = document.body,
  onAfterOpen,
  onAfterClose,
  shouldCloseOnBackdropClick = true,
  shouldCloseOnEsc = true,
  id,
  className = 'pdf-modal-viewer',
  backdropClassName = 'pdf-modal-viewer__backdrop',
  dialogClassName = 'pdf-modal-viewer__dialog',
  bodyClassName = 'pdf-modal-viewer__body',
  closeButtonClassName = 'pdf-modal-viewer__close-btn',
  error,
  loading,
  noData,
  preventScroll = true,
  closeTimeout = 0,
  role = 'dialog',
  ariaModal = true,
  file,
  options = {},
  children,
}: ViewerProps) => {
  const dialogRef = useRef<HTMLDivElement | null>(null)

  const {
    setRef: setBodyScrollLockRef,
    disableScroll,
    enableScroll,
  } = useBodyScrollLock()

  const { setRef: setAriaHiddenRef, hide, unhide } = useAriaHidden()

  const {
    setRef: setTrapRef,
    activate,
    deactivate,
  } = useFocusTrap({
    allowOutsideClick: true, // falseの場合、Viewerを閉じてもFocusTrapが解除されないので注意
    escapeDeactivates: false, // ESCキーを押したときの動作は自前でカスタマイズしたいのでfalse
    returnFocusOnDeactivate: true,
  })

  const setRefs = useCallback(
    (node: HTMLDivElement | null) => {
      dialogRef.current = node
      setBodyScrollLockRef(node)
      setTrapRef(node)
      setAriaHiddenRef(node)
    },
    [setBodyScrollLockRef, setTrapRef, setAriaHiddenRef]
  )

  const close = useCallback(() => {
    onClose()
  }, [onClose])

  const afterOpen = useCallback(() => {
    if (onAfterOpen) {
      onAfterOpen()
    }
  }, [onAfterOpen])

  const afterClose = useCallback(() => {
    if (onAfterClose) {
      onAfterClose()
    }
  }, [onAfterClose])

  const isFirstMount = useFirstMountState()
  const [modalState, setModalState] = useState({
    isOpen: false,
    beforeClose: false,
    afterOpen: false,
  })

  useEffect(() => {
    if (isOpen) {
      setModalState((prevState) => ({ ...prevState, isOpen: true }))
    } else if (!isFirstMount && modalState.isOpen) {
      setModalState((prevState) => ({ ...prevState, beforeClose: true }))
    }
  }, [isOpen, modalState.isOpen, isFirstMount])

  useEffect(() => {
    let animationFrame: number
    if (modalState.isOpen) {
      animationFrame = window.requestAnimationFrame(() => {
        setModalState((prevState) => ({ ...prevState, afterOpen: true }))
        if (isOpen) {
          afterOpen()
        }
      })
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [modalState.isOpen, isOpen, afterOpen])

  useEffect(() => {
    let timeoutId: number
    if (modalState.beforeClose) {
      timeoutId = window.setTimeout(() => {
        setModalState({
          isOpen: false,
          beforeClose: false,
          afterOpen: false,
        })
        if (preventScroll) {
          enableScroll()
        }
        deactivate()
        unhide()
        afterClose()
      }, closeTimeout)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [
    modalState.beforeClose,
    afterClose,
    closeTimeout,
    preventScroll,
    enableScroll,
    deactivate,
    unhide,
  ])

  useEffect(() => {
    if (modalState.afterOpen && modalState.isOpen) {
      if (preventScroll) {
        disableScroll({
          allowTouchMove(el) {
            // モーダルの内部はスクロールを許可する
            let element: Element | HTMLElement | null = el
            while (element && element !== document.body) {
              if (dialogRef.current && element === dialogRef.current) {
                return true
              }

              element = element.parentElement
            }
            return false
          },
        })
      }
      activate()
      hide()
    }
  }, [
    modalState.afterOpen,
    modalState.isOpen,
    preventScroll,
    disableScroll,
    activate,
    hide,
  ])

  const handleClick = useCallback(() => {
    close()
  }, [close])

  const backdropRef = useRef<HTMLDivElement>(null)

  const handleBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (event.target !== backdropRef.current) {
        // 内側をクリックした場合は何もしない
        return
      }
      if (shouldCloseOnBackdropClick) {
        close()
      }
    },
    [shouldCloseOnBackdropClick, close]
  )

  const handleKeydown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (shouldCloseOnEsc && event.code === 'Escape') {
        event.stopPropagation()
        close()
      }
    },
    [shouldCloseOnEsc, close]
  )

  const buildClassName = (): string => {
    let result = className

    if (modalState.afterOpen) {
      result = `${className} ${className}--after-open`
    }

    if (modalState.beforeClose) {
      result = `${className} ${className}--before-close`
    }

    return result
  }

  const shouldBeClosed = () => !modalState.isOpen && !modalState.beforeClose

  if (shouldBeClosed()) {
    return null
  }

  return createPortal(
    <div className={buildClassName()} id={id}>
      <div // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        ref={backdropRef}
        className={backdropClassName}
        onClick={handleBackdropClick}
      >
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
          ref={setRefs}
          tabIndex={-1}
          className={dialogClassName}
          role={role}
          aria-modal={ariaModal}
          onKeyDown={handleKeydown}
        >
          <ViewerCore
            file={file}
            className={bodyClassName}
            options={options}
            error={error}
            loading={loading}
            noData={noData}
          >
            {children}
          </ViewerCore>
          <button
            type="button"
            className={closeButtonClassName}
            aria-label="Close Viewer"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>,
    container
  )
}

export default Object.assign(Viewer, {
  Canvas,
  Thumbnail,
  Meta,
})
