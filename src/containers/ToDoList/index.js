import React, { Component } from 'react'
import AddTask from '../../components/AddTask/index'
import Task from '../../components/Task/index'
import './style.css'

class ToDoList extends Component {
  constructor (props) {
    super(props)
    this.state = { tasks: [] }
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleDoneClick = this.handleDoneClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  handleAddClick (task) {
    if (task !== '') {
      const nextTask = this.createTask(task)
      this.setState({ tasks: [...this.state.tasks, nextTask] })
    } else {
      window.alert('The input shouldn\'t be empty!')
    }
  }

  createTask (task) {
    return {
      task,
      createdAt: new Date(),
      id: Math.random() * 100,
      finished: false
    }
  }

  handleDoneClick (id) {
    const newState = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.finished = true
        return task
      }

      return task
    })

    this.setState({ tasks: newState })
  }

  handleDeleteClick (id) {
    const newState = this.state.tasks.filter((task) => {
      return task.id !== id
    })

    this.setState({ tasks: newState })
  }

  render () {
    return (
      <div className='container'>
        <h1>To Do List</h1>
        <AddTask onClick={this.handleAddClick} />
        <div className='listArea'>
          {
                this.state.tasks.map((task) => {
                  return (
                    <Task
                      key={task.id}
                      data={task}
                      onDone={this.handleDoneClick}
                      onDelete={this.handleDeleteClick}
                    />
                  )
                })
            }
        </div>
      </div>
    )
  }
}

export default ToDoList
