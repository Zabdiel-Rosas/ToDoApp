import React, { Component } from 'react'
import './style.css'

class Task extends Component {
  handleOnDone = () => {
    this.props.onDone(this.props.data.id)
  }

  handleOnDelete = () => {
    this.props.onDelete(this.props.data.id)
  }

  render() {
    const { createdAt, finished, deleted } = this.props.data
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
      <div className={finished ? 'green card' : 'card'} style={handleStyle(deleted)}>
        <div className='taskArea'>
          <div className='taskText'>
            <p className={finished ? 'finished textCard' : 'textCard'}>{this.props.data.title}</p>
            <p className={finished ? 'finished textCard' : 'textCard'}>{this.props.data.desc}</p>
          </div>
          <div className='date'>
            <p className='textCard'>{createdAt.toDateString()}</p>
          </div>
        </div>
        <aside className='btnArea'>
          <button type='button' className={finished ? 'undone' : 'done'} style={handleBtnStyle(deleted)} onClick={this.handleOnDone} disabled={deleted}>{finished ? 'Undone' : 'Done'}</button>
          <button type='button' className='delete' onClick={this.handleOnDelete}>Delete</button>
        </aside>
      </div>
    )
  }
}

export default Task
