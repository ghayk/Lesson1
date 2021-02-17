import React, { Component } from 'react';
import Task from '../Task/Task'
import Add from '../Add/Add'
import id from '../Id/IdGenerator'

class ToDo extends Component {
   state = {
      tasks: [
         {
            title:'Task 1',
            _id:id()
         },
         {
            title:'Task 2',
            _id:id()
         },
         {
            title:'Task 3',
            _id:id()
         },
         {
            title:'Task 4',
            _id:id()
         }
      ],
   }
   CloseTask = id => {
      const tasks = [...this.state.tasks]
         this.setState({
            tasks: tasks.filter((item) => item._id !== id)
         })
   }
   AddTask = (inputValue) => {
      const tasks = [...this.state.tasks]
      inputValue && tasks.push({
         title:inputValue,
         _id:id()
      })
      this.setState({ tasks })
   }

   render() {
      return (
         <div >
            <Add AddTask={this.AddTask} />
            <Task CloseTask={this.CloseTask} tasks={this.state.tasks} />
         </div>
      )
   }
}
export default ToDo