import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

class Task extends Component {

   render() {
      const { CloseTask } = this.props
      const tasks = this.props.tasks.map(item => {
         return (
            <Col key={item._id} className='col' xs={6} sm={4} md={3} lg={2} >
               <div className='block'>
                  {item.title}
                  <button className='btnClose' onClick={() => CloseTask(item._id)}>
                  <FontAwesomeIcon icon={faWindowClose} />
                  </button>
                  &nbsp;<input type='checkbox' />
               </div>
            </Col>
         )
      })
      return (
         <Container>
            <Row className="justify-content-center ">{this.props.tasks.length === 0 ? <p>list is empty</p> : tasks}</Row>
         </Container>
      )
   }
}
export default Task 