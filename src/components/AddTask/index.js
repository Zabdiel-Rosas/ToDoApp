import React, { Component } from 'react'
import './style.css'
import Modal from '../Modal/index'

class AddTask extends Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false, task: { title: '', desc: '' }, errors: { title: '', desc: '' } }
    this.onChange = props.onChange
    this.onClick = props.onClick
    this.handleShow = this.handleShow.bind(this)
    this.handleHide = this.handleHide.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescChange = this.handleDescChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.validate = this.validate.bind(this)
  }

  handleShow() {
    this.setState({ showModal: true })
  }

  handleHide() {
    this.setState({ showModal: false, task: { title: '', desc: '' }, errors: { title: '', desc: '' } })
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

  validate(task, nextError) {
    if (task.title !== '' && task.desc !== '') {
      this.onClick(task)
      this.setState({ task: { title: '', desc: '' } })
      this.handleHide()
    } else if (task.title === '' && task.desc === '') {
      nextError = { title: 'A title is required', desc: 'You must enter a description' }
      this.setState({ errors: nextError })
    } else {
      if (task.title === '') {
        nextError.title = 'A title is required'
        this.setState({ errors: nextError })
      } else {
        nextError.desc = 'You must enter a description'
        this.setState({ errors: nextError })
      }
    }
  }

  handleClick() {
    this.setState({ errors: { title: '', desc: '' } }, () => {
      const { task, errors } = this.state
      this.validate(task, errors)
    })
  }

  handleClickOutside() {
    this.handleHide()
  }

  render() {
    const { errors } = this.state

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
                    className={errors['title'] === '' ? 'modal-input' : 'modal-input errorInput'}
                    placeholder='Write task title'
                    value={this.state.task.title}
                    onChange={this.handleTitleChange}
                  />
                  <span style={{ color: 'red', 'font-weight': 'bold' }}>{errors.title}</span>
                  <label className='label'>Description:</label>
                  <input
                    type='text'
                    className={errors['desc'] === '' ? 'modal-input' : 'modal-input errorInput'}
                    placeholder='Write description'
                    value={this.state.task.desc}
                    onChange={this.handleDescChange}
                  />
                  <span style={{ color: 'red', 'font-weight': 'bold' }}>{errors.desc}</span>
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
