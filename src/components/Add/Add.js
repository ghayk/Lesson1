import React, { Component } from 'react';
import styles from './Add.module.css'

class Add extends Component {
   state = {
      inputValue: ''
   }
   handleValue = (e) => {
      this.setState({ inputValue: e.target.value })
   }
   AddTask = () => {
      this.props.Onclick(this.state.inputValue)
      this.setState({ inputValue: '' })
   }
   render() {
      return (
         <div>
            <input
               className={styles.input}
               onChange={this.handleValue}
               value={this.state.inputValue}
            />
            <button
               className={styles.btn}
               onClick={this.AddTask}
            >add</button>
         </div>
      )
   }
}
export default Add 