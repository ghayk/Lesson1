import React, { Component } from 'react'
import Task from './Task'
import id from '../helpers/IdGenerator'
class ToDo extends Component {
  state = {
    tasks: [
      {
        title: 'Task 1',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magni harum ut quam laboriosam facere placeat ipsam a vel neque.',
        _id: id(),
        checked: false,
      },
      {
        title: 'Task 2',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magni harum ut quam laboriosam facere placeat ipsam a vel neque.',
        _id: id(),
        checked: false,
      },
      {
        title: 'Task 3',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magni harum ut quam laboriosam facere placeat ipsam a vel neque.',
        _id: id(),
        checked: false,
      },
      {
        title: 'Task 4',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magni harum ut quam laboriosam facere placeat ipsam a vel neque.',
        _id: id(),
        checked: false,
      },
    ],
    checked: false,
  }
  CloseTask = (id) => {
    const tasks = [...this.state.tasks]
    this.setState({
      tasks: tasks.filter((item) => item._id !== id),
    })
  }
  AddTask = (titleValue, descriptionValue, id) => {
    const tasks = [...this.state.tasks]
    titleValue &&
      descriptionValue &&
      tasks.push({
        title: titleValue,
        description: descriptionValue,
        _id: id,
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
    return this.state.tasks.some((item) => item.checked === true)
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
  EditTask = (title, description, id) => {
    let tasks = [...this.state.tasks]
    tasks = tasks.map((item) => {
      if (item._id === id) {
        item.title = title
        item.description = description
      }
      return item
    })
    this.setState({ tasks })
  }
  render() {
    return (
      <>
        <h1 style={{ textAlign: 'center', color: 'white' }}>ToDo list</h1>
        <Task
          CloseTask={this.CloseTask}
          tasks={this.state.tasks}
          checked={this.state.checked}
          togleId={this.togleId}
          handleIdForDelete={this.handleIdForDelete}
          DellTasks={this.DellTasks}
          Disabled={this.Disabled}
          CheckedAll={this.CheckedAll}
          EditTask={this.EditTask}
          AddTask={this.AddTask}
          id={id}
        />
      </>
    )
  }
}
export default ToDo
