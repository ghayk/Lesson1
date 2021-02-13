import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import id from '../Id/IdGenerator'
class Task extends Component {

   render() {
      const { Onclick } = this.props
      const tasks = this.props.tasks.map((item, index) => {
         return (
            <Col key={id()} className='col' xs={6} sm={4} md={3} lg={2} >
               <div className='block'>
                  {item}
                  <button className='btnClose' onClick={() => Onclick(index)}>x</button>
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