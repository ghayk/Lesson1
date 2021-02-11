import React, { Component } from 'react';
import styles from './Task.module.css'
class Task extends Component {

   render() {
      const {Onclick} = this.props
      const tasks = this.props.tasks.map((item, index) => {
         return (
            <div className={styles.list} key={index}>
               <div className={styles.task}>{item}</div>
               <button className={styles.btn} onClick={()=>Onclick(index)}>x</button>
            </div>
         )
      })
      return (
         <div className={styles.container}>{this.props.tasks.length===0?<p>list is empty</p>:tasks}</div>
      )
   }
}
export default Task 