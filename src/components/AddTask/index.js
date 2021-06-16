import React, { Component } from 'react'
import './style.css'
import Modal from '../Modal/index'

class AddTask extends Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false, task: { title: '', desc: '' } }
    this.onChange = props.onChange
    this.onClick = props.onClick
    this.handleShow = this.handleShow.bind(this)
    this.handleHide = this.handleHide.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescChange = this.handleDescChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  handleShow() {
    this.setState({ showModal: true })
  }

  handleHide() {
    this.setState({ showModal: false })
  }

  handleTitleChange(e) {
    var nextTask = this.state.task
    nextTask.title = e.target.value
    this.setState({ task: nextTask })
  }

  handleDescChange(e) {
    var nextTask = this.state.task
    nextTask.desc = e.target.value
    this.setState({ task: nextTask })
  }

  handleClick() {
    const { task } = this.state
    if (task.title !== '' && task.desc !== '') {
      this.onClick(task)
      this.setState({ task: { title: '', desc: '' } })
      this.handleHide()
    } else {
      window.alert('The input shouldn\'t be empty!')
    }

  }

  handleClickOutside() {
    this.handleHide()
  }

  render() {
    return (
      <div className='addingTask-container'>
        <div className='addTaskCard'>
          <button type='button' className='addTaskBtn' onClick={this.handleShow}>+ Add a Task</button>
          {
            this.state.showModal &&
            <Modal>
              <div className='modal-background' onClick={this.handleClickOutside}></div>
              <div className='add-task-form'>
                <button className='close-btn' onClick={this.handleHide}>X</button>
                <div className='input-area'>
                  <h2 className='instruction'>Create Task:</h2>
                  <label className='label'>Title:</label>
                  <input
                    type='text'
                    className='modal-input'
                    placeholder='Write task title'
                    value={this.state.task.title}
                    onChange={this.handleTitleChange}
                  />
                  <label className='label'>Description:</label>
                  <input
                    type='text'
                    className='modal-input'
                    placeholder='Write description'
                    value={this.state.task.desc}
                    onChange={this.handleDescChange}
                  />
                  <button className='btn' onClick={this.handleClick}>Add</button>
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
