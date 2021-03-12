import React, { Component } from 'react'
import Task from '../Task'
import id from '../../helpers/IdGenerator'
class ToDo extends Component {
  state = {
    tasks: [],
    checked: false,
    selectedId: [],
  }
  componentDidMount() {
    fetch('http://localhost:3001/task')
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        this.setState({ tasks: data })
      })
      .catch((err) => console.error('ERR', err.message))
  }
  CloseTask = (id) => {
    fetch('http://localhost:3001/task/' + id, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        let tasks = [...this.state.tasks]
        tasks = tasks.filter((item) => item._id !== id)
        this.setState({ tasks })
      })
      .catch((error) => {
        console.error(error)
      })
  }
  AddTask = (task) => {
    if (!task.title || !task.description) return
    const tasks = [...this.state.tasks]
    task.date = task.date.toISOString().slice(0, 10)
    fetch('http://localhost:3001/task', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        tasks.push(data)
        this.setState({ tasks })
      })
      .catch((err) => console.error('ERR', err.message))
  }
  togleId = (id) => {
    let selectedId = [...this.state.selectedId]
    if (selectedId.includes(id)) {
      selectedId = selectedId.filter((i) => i !== id)
    } else {
      selectedId.push(id)
    }
    this.setState({ selectedId })
  }
  DellTasks = () => {
    fetch('http://localhost:3001/task', {
      method: 'PATCH',
      body: JSON.stringify({ tasks: Array.from(this.state.selectedId) }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        let tasks = [...this.state.tasks]
        let selectedId = [...this.state.selectedId]
        tasks = tasks.filter((item) => !selectedId.includes(item._id))
        this.setState({ tasks, selectedId: [] })
      })
      .catch((e) => console.error(e))
  }
  Disabled = () => {
    return this.state.tasks.some((item) => item.checked === true)
  }
  CheckedAll = () => {
    let checked = this.state.checked
    let tasks = this.state.tasks
    let selectedId = [...this.state.selectedId]
    if (!this.state.checked) {
      tasks.forEach((item) => {
        if (!selectedId.includes(item._id)) {
          selectedId.push(item._id)
        }
      })
      this.setState({ selectedId, checked: !checked })
    } else {
      this.setState({ selectedId: [], checked: !checked })
    }
  }
  EditTask = (task) => {
    task.date = task.date.toISOString().slice(0, 10)
    fetch('http://localhost:3001/task/' + task._id, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        let tasks = [...this.state.tasks]
        tasks = tasks.map((item) => {
          if (item._id === task._id) {
            item.title = task.title
            item.description = task.description
          }
          return item
        })
        this.setState({ tasks })
      })
      .catch((error) => {
        console.error('Edit Task Request', error)
      })
  }
  render() {
    return (
      <>        
        <Task
          CloseTask={this.CloseTask}
          tasks={this.state.tasks}
          togleId={this.togleId}
          handleIdForDelete={this.handleIdForDelete}
          DellTasks={this.DellTasks}
          Disabled={this.Disabled}
          CheckedAll={this.CheckedAll}
          EditTask={this.EditTask}
          AddTask={this.AddTask}
          id={id}
          selectedId={this.state.selectedId}
        />
      </>
    )
  }
}
export default ToDo
