import React, { Component } from 'react';
import Task from './Task'


class ToDO extends Component {
   state = {
      tasks: ['task1', 'task2', 'task3', 'task4'],    
      value: ''
   }
   Close = (i) => {
      this.setState({ task: this.state.tasks.splice(i, 1) })
   }
   InputValue = (e) => {
      this.setState({ value: e.target.value })
   }
   Add = () => {
      this.state.value && this.setState({ task: this.state.tasks.push(this.state.value),value:''})      
   }

   render() {
      return (
         <div>
            <div className='form'>
               <input value={this.state.value} type='text' onChange={this.InputValue} />
               <button onClick={this.Add}>Add</button>
            </div>
            {this.state.tasks.length === 0? <h3 className='ListEmpty'>List is empty</h3> : <Task task={this.state.tasks} Close={this.Close} />}
         </div>
      )
   }
}
export default ToDO