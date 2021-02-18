import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
class Add extends Component {
   state = {
      inputValue: ''
   }
   handleValue = (e) => {
      this.setState({ inputValue: e.target.value })
   }
   AddTask = () => {
      this.props.AddTask(this.state.inputValue)
      this.setState({ inputValue: '' })
   }
   intputEnter = (e) => {
      if(e.key === 'Enter'){
         this.AddTask()
      }
   }
   render() {
      return (
         <Row>
            <Col>
               <input
                  className='inputAdd'
                  onChange={this.handleValue}
                  value={this.state.inputValue}
                  onKeyDown={this.intputEnter}
                  disabled={!!this.props.removeTasks.length}
               />
               <button
                  className='btnAdd'
                  onClick={this.AddTask}
                  disabled={!!!this.state.inputValue}
               ><FontAwesomeIcon icon={faPlus} /></button>
            </Col>
         </Row>
      )
   }
}
export default Add 