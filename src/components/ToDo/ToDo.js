import React, { Component } from 'react';
import styles from './ToDo.module.css'
import Task from '../Task/Task'
import Add from '../Add/Add'


class ToDo extends Component {
   state = {
      tasks: ['Task1', 'Task2', 'Task3', 'Task4'],
   }
   CloseTask = i => {
      const tasks = this.state.tasks.filter((item, index) => {
         if (index !== i) {
            return item
         } else return ''
      })
      this.setState({ tasks })
   }
   AddTask = (inputValue) => {
      const tasks = [...this.state.tasks]
      inputValue && tasks.push(inputValue)
      this.setState({tasks})
   }

   render() {
      return (
         <div className={styles.container}>
            <Add Onclick={this.AddTask} />
            <Task Onclick={this.CloseTask} tasks={this.state.tasks} />
         </div>
      )
   }
}
export default ToDo