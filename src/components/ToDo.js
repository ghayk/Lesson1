import React, { Component } from 'react'
import id from './IdGenerator'
import Task from './Task'

class ToDo extends Component {
   state = {
      tasks: [
         { title: 'Task 1', id: id() },
         { title: 'Task 2', id: id() },
         { title: 'Task 3', id: id() },
         { title: 'Task 4', id: id() },
      ]
   }
   DellTask = id => {
      let tasks = [...this.state.tasks]
      tasks.filter(i=>i.id!==id)
   }
   render() {
      return (
         <div>
            <Task DellTask={this.DellTask} tasks={this.state.tasks} />
         </div>
      )
   }
}

export default ToDo