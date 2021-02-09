import React, { Component } from 'react';

class AddNewTask extends Component {
   state = {
      inputValue: '',
   }
   getValue = (e) => {
      this.setState({ inputValue: e.target.value })
   }
   setValue = (inputValue) => {
      this.props.click(inputValue)
      this.setState({ inputValue: '' })
   }
   render() {
      const { getValue, setValue } = this
      const { inputValue } = this.state
      return (
         <div>
            <input
               type='text'
               onChange={getValue}
               value={inputValue}
            />
            <button
               onClick={() => { setValue(inputValue) }}
            >add
            </button>
         </div>
      )
   }
}
export default AddNewTask 