import React, { Component } from 'react';
import Task from '../Task/Task'
import Add from '../Add/Add'

class ToDo extends Component {
   state = {
      tasks: ['Task1', 'Task2', 'Task3', 'Task4','Task5', 'Task6', 'Task7', 'Task8'],
   }
   CloseTask = i => {
      const tasks = [...this.state.tasks]
         this.setState({
            tasks: tasks.filter((item, index) => {
               if (index !== i) {
                  return item
               } else return ''
            })
         })
   }
   AddTask = (inputValue) => {
      const tasks = [...this.state.tasks]
      inputValue && tasks.push(inputValue)
      this.setState({ tasks })
   }

   render() {
      return (
         <div >
            <Add Onclick={this.AddTask} />
            <Task Onclick={this.CloseTask} tasks={this.state.tasks} />
         </div>
      )
   }
}
export default ToDo