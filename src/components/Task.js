import React, { Component } from 'react';


class Task extends Component {
   constructor(props) {
      super()
   }
   render() {
      return (
         <div className='flaxContainer'>{this.props.task.map((t, i) => {
            return (
               <div className='flexList' key={i}>
                  <p className='task'>{t}</p>
                  <button onClick={() => this.props.Close(i)}>x</button>
               </div>
            )
         })}</div>
      )
   }
}
export default Task 