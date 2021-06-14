import { Component } from 'react'
import ReactDom from 'react-dom'

const modalRoot = document.getElementById('modal-root')

class Modal extends Component {

  render () {
    return ReactDom.createPortal(
      this.props.children,
      modalRoot
    )
  }
}

export default Modal
