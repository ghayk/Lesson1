import React, { Component } from 'react';
import AddNewTask from './AddNewTask'
import Result from './Result'

class ToDO extends Component {
   state = {
      inputValue: '',
   }
   setValue = (inputValue) => {
      this.setState({ inputValue })
   }
   render() {
      const { setValue } = this
      const { inputValue } = this.state
      return (
         <div className='container'>
            <AddNewTask click={setValue} />
            <Result value={inputValue} />
         </div>
      )
   }
}
export default ToDO