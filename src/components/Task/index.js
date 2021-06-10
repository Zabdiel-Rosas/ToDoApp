import React, { Component } from 'react'
import './style.css'

class Task extends Component {
handleOnDone = () => {
  this.props.onDone(this.props.data.id)
}

handleOnDelete = () => {
  this.props.onDelete(this.props.data.id)
}

render () {
  const date = this.props.data.createdAt
  const done = this.props.data.finished
  const deleted = this.props.data.deleted
  const handleStyle = (condition) => {
    if (condition) {
      return {
        'border-left': 'solid 10px indianred'
      }
    }
  }

  const handleBtnStyle = (condition) => {
    if (condition) {
      return {
        background: '#d8d8d8',
        border: 'none',
        cursor: 'not-allowed'
      }
    }
  }

  return (
    <div className={done ? 'green card' : 'card'} style={handleStyle(deleted)}>
      <div className='taskArea'>
        <div className='taskText'>
          <p className={done ? 'finished' : null}>{this.props.data.task}</p>
        </div>
        <div className='date'>
          <p>{date.toDateString()}</p>
        </div>
      </div>
      <aside className='btnArea'>
        <button type='button' className={done ? 'undone' : 'done'} style={handleBtnStyle(deleted)} onClick={this.handleOnDone} disabled={deleted}>{done ? 'Undone' : 'Done'}</button>
        <button type='button' className='delete' onClick={this.handleOnDelete}>Delete</button>
      </aside>
    </div>
  )
}
}

export default Task
