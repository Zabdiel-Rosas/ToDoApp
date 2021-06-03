import { Component } from 'react'
import './App.css'
import ToDoList from './containers/ToDoList/index'

class App extends Component {
  render () {
    return (
      <div className='main'>
        <ToDoList />
      </div>
    )
  }
}

export default App
