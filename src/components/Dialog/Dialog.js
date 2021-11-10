import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
`

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
  width: 30%;
  box-sizing: border-box;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  background: #fff;
`

function Dialog({ visible, children, onClose, lockScroll = true }) {
  const [bodyOverflow, setBodyOverflow] = useState(null)

  useEffect(() => {
    if (lockScroll) {
      setBodyOverflow(document.body.style.overflow)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      if (lockScroll) {
        document.body.style.overflow = bodyOverflow
      }
    }
  }, [lockScroll, bodyOverflow])

  if (!visible) return null

  return ReactDOM.createPortal(
    <>
      <Overlay onClick={onClose} />
      <Modal>{children}</Modal>
    </>,
    document.getElementById('portal')
  )
}

Dialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  lockScroll: PropTypes.bool,
}

export default Dialog
