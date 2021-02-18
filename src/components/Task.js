import React, {Component} from 'react'

class Task extends Component {
   render(){
      return(
         <div>
            {this.props.tasks.map(item=>{
               return(
                  <div>
                     <div>{item.title}</div>
                     <div><button onClick={()=>this.props.DellTask(item.id)}>x</button></div>
                  </div>
               )
            })}
         </div>
      )
   }
}

export default Task