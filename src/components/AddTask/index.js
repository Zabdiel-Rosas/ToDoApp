import React, { Component } from 'react'
import './style.css'

class AddTask extends Component {
  constructor (props) {
    super(props)
    this.onChange = props.onChange
    this.onClick = props.onClick
    this.state = { task: '' }
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
    return (
      <div className='addingTask'>
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
    )
  }
}

export default AddTask
