import React, { Component } from 'react'

class AddNewCar extends Component {
   state = {
      isBlock: true,
   }
   Display = () => {
      this.setState({isBlock:!this.state.isBlock})
   }
   render() {
      return (
         <div>
            <button onClick={this.Display} className="DivBtnAddNewCar">Add new car</button>
            <div className={`DivInput ${this.state.isBlock?'active':''}`}>
               <input type='text' placeholder='Title' />
               <input type='text' placeholder='URL img' />
               <input type='text' placeholder='Text' />
               <button>Add</button>
            </div>
         </div>
      )
   }
}
export default AddNewCar