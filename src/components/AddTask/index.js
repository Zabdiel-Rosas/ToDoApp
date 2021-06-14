import React, { Component } from 'react'
import './style.css'
import Modal from '../Modal/index'

class AddTask extends Component {
  constructor (props) {
    super(props)
    this.state = { showModal: false, task: '' }
    this.onChange = props.onChange
    this.onClick = props.onClick
    this.handleShow = this.handleShow.bind(this)
    this.handleHide = this.handleHide.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleShow () {
    this.setState({ showModal: true })
  }

  handleHide () {
    this.setState({ showModal: false })
  }

  handleChange (e) {
    this.setState({ task: e.target.value })
  }

  handleClick () {
    this.onClick(this.state.task)
    this.setState({ task: '' })
    this.handleHide()
  }

  render () {
    return (
      <div className='addingTask-container'>
        <div className='addTaskCard'>
          <button type='button' className='addTaskBtn' onClick={this.handleShow}>+ Add a Task</button>
          {
            this.state.showModal &&
              <Modal>
                <div className='modal-background'>
                  <div className='add-task-form'>
                    <button className='close-btn' onClick={this.handleHide}>X</button>       
                    <h2 className='instruction'>Create Task:</h2>                                                             
                    <div className='input-area'>
                      <label className='label'>Title:</label>
                      <input
                        type='text'
                        className='modal-input'
                        placeholder='Write task title'
                        value={this.state.task}
                        onChange={this.handleChange}
                      />                      
                      <label className='label'>Description:</label>
                      <input
                        type='text'
                        className='modal-input'
                        placeholder='Write description'
                        value={this.state.task}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className='addBtnArea'>
                      <button className='btn' onClick={this.handleClick}>Add</button>
                    </div>
                  </div>
                </div>
              </Modal>
          }
        </div>
      </div>
    )
  }
}

export default AddTask
