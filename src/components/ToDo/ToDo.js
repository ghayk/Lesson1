import React, { Component } from 'react';
import Task from '../Task/Task'
import Add from '../Add/Add'
import id from '../Id/IdGenerator'

class ToDo extends Component {
   state = {
      tasks: [
         {
            title: 'Task 1',
            _id: id(),
         },
         {
            title: 'Task 2',
            _id: id(),
         },
         {
            title: 'Task 3',
            _id: id(),
         },
         {
            title: 'Task 4',
            _id: id(),
         }
      ],
      removeTasks: [],
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
         title: inputValue,
         _id: id()        
      })
      this.setState({ tasks })
   }
   togleId = id => {
      let removeTasks = [...this.state.removeTasks]      
      if(removeTasks.includes(id)){
         removeTasks = removeTasks.filter(item=>item!==id)
      } else removeTasks.push(id)
      this.setState({removeTasks})
   }
   DellTasks = () => {
      let tasks = [...this.state.tasks];
      let removeTasks = [...this.state.removeTasks];
      tasks = tasks.filter(item => !removeTasks.includes(item._id));
      this.setState({tasks,removeTasks:[]});
   }

   render() {
      return (
         <div >
            <Add
               AddTask={this.AddTask}
               removeTasks={this.state.removeTasks}
               
            />
            <Task
               CloseTask={this.CloseTask}
               tasks={this.state.tasks}
               togleId={this.togleId}
               handleIdForDelete={this.handleIdForDelete}
               DellTasks={this.DellTasks}
               removeTasks={this.state.removeTasks}
            />
         </div>
      )
   }
}
export default ToDo