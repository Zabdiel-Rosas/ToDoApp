import React, { Component } from 'react'
import AddTask from '../../components/AddTask/index'
import Task from '../../components/Task/index'
import './style.css'

class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = { tasks: [] }
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleDoneClick = this.handleDoneClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  handleAddClick(task) {
    const nextTask = this.createTask(task)
    this.setState({ tasks: [nextTask, ...this.state.tasks] })
  }

  createTask(task) {
    return {
      title: task.title,
      desc: task.desc,
      createdAt: new Date(),
      id: Math.random() * 100,
      finished: false,
      deleted: false
    }
  }

  handleDoneClick(id) {
    const newState = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.finished = !task.finished
        return task
      }

      return task
    })

    this.setState({ tasks: newState })
  }

  handleDeleteClick(id) {
    const currentTask = this.state.tasks.filter((task) => {
      return task.id === id
    })

    if (!currentTask[0].finished) {
      // This code deletes the task from the UI
      /* const newState = this.state.tasks.filter((task) => {
        return task.id !== id
      })
      this.setState({ tasks: newState }) */

      const newState = this.state.tasks.map((task) => {
        if (task.id === id) {
          task.deleted = true
          return task
        }

        return task
      })

      this.setState({ tasks: newState })
    } else {
      window.alert('Can\'t Delete a task marked as done')
    }
  }

  render() {
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
