import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
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
         <Row>
            <Col>
               <input
                  className='inputAdd'
                  onChange={this.handleValue}
                  value={this.state.inputValue}
                  
               />
               <button
                  className='btnAdd'
                  onClick={this.AddTask}
               >add</button>
            </Col>
         </Row>
      )
   }
}
export default Add 