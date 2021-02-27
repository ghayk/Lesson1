import React, { Component } from 'react'
import Task from './Task'
import Add from './Add'
import id from '../helpers/IdGenerator'

class ToDo extends Component {
  state = {
    tasks: [
      { title: 'Task 1', _id: id(), checked: false },
      { title: 'Task 2', _id: id(), checked: false },
      { title: 'Task 3', _id: id(), checked: false },
      { title: 'Task 4', _id: id(), checked: false },
    ],
    checked: false,
  }
  CloseTask = (id) => {
    const tasks = [...this.state.tasks]
    this.setState({
      tasks: tasks.filter((item) => item._id !== id),
    })
  }
  AddTask = (inputValue) => {
    const tasks = [...this.state.tasks]
    inputValue &&
      tasks.push({
        title: inputValue,
        _id: id(),
        checked: false,
      })
    this.setState({ tasks })
  }
  togleId = (id) => {
    let tasks = [...this.state.tasks]
    tasks = tasks.map((item) => {
      if (item._id === id) {
        item.checked = !item.checked
      }
      return item
    })
    this.setState({ tasks })
  }
  DellTasks = () => {
    let tasks = [...this.state.tasks]
    tasks = tasks.filter((item) => item.checked === false)
    this.setState({ tasks, checked: false })
  }
  Disabled = () => {    
  return this.state.tasks.some(item=>item.checked===true)   
  }
  CheckedAll = () => {
    let checked = this.state.checked
    let tasks = this.state.tasks
    tasks = tasks.map((item) => {
      if (checked) {
        item.checked = false
      } else item.checked = true
      return item
    })
    this.setState({ tasks, checked: !checked })
  }
  render() {
    return (
      <>
        <Add
          AddTask={this.AddTask}
          removeTasks={this.state.removeTasks}
          Disabled={this.Disabled}
        />
        <Task
          CloseTask={this.CloseTask}
          tasks={this.state.tasks}
          checked={this.state.checked}
          togleId={this.togleId}
          handleIdForDelete={this.handleIdForDelete}
          DellTasks={this.DellTasks}
          Disabled={this.Disabled}
          CheckedAll={this.CheckedAll}
        />
      </>
    )
  }
}
export default ToDo
