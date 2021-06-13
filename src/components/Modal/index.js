import { Component } from 'react'
import ReactDom from 'react-dom'

const modalRoot = document.getElementById('modal-root')

class Modal extends Component {
  constructor (props) {
    super(props)
    this.state = { task: '' }
    this.onChange = props.onChange
    this.onClick = props.onClick
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({ task: e.target.value })
  }

  handleClick () {
    this.onClick(this.state.task)
    this.setState({ task: '' })
  }

  render () {
    return ReactDom.createPortal(
      this.props.children,
      modalRoot
    )
  }
}

export default Modal
