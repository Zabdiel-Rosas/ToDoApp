import React, { Component } from 'react'
import './style.css'
import Modal from '../Modal/index'

class AddTask extends Component {
  constructor (props) {
    super(props)
    this.state = { showModal: false }
    this.handleShow = this.handleShow.bind(this)
    this.handleHide = this.handleHide.bind(this)
  }

  handleShow () {
    this.setState({ showModal: true })
  }

  handleHide () {
    this.setState({ showModal: false })
  }

  render () {
    return (
      <div className='addingTask'>
        <div className='addTaskCard'>
          <button type='button' className='addBtn' onClick={this.handleShow}>+ Add a Task</button>
          {
            this.state.showModal &&
              <Modal>
                <div className='modal-background'>
                  <div className='add-task-form'>
                    <input
                      type='text'
                      className='textArea'
                      placeholder='Write new task'
                      value={this.state.task}
                      onChange={this.handleChange}
                    />
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
