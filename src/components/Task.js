import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

class Task extends PureComponent {
  render() {
    const {
      CloseTask,
      togleId,
      DellTasks,
      Disabled,
      CheckedAll,
      checked,      
    } = this.props
    const tasks = this.props.tasks.map((item) => {
      return (
        <Col key={item._id} className="col" xs={6} sm={4} md={3} lg={2}>
          <div className={`block ${item.checked ? 'checked' : ''}`}>
            {item.title}
            <button
              disabled={Disabled()}
              className="btnClose"
              onClick={() => CloseTask(item._id)}
            >
              <FontAwesomeIcon icon={faWindowClose} />
            </button>        
            <input
              className='checkbox'
              checked={item.checked}
              type="checkbox"
              onChange={() => togleId(item._id)}
            />
          </div>
        </Col>
      )
    })

    return (
      <Container>
        <Row className="justify-content-center ">
          {this.props.tasks.length === 0 ? <p style={{color:'white'}}>list is empty</p> : tasks}
        </Row>
        <Row>
          <Col className={this.props.tasks.length === 0?'empty':''}>
            <button 
            className="btn-dell-tasks" onClick={DellTasks}>
              Dell tasks
            </button>
            <button className='SelectAll' disabled={!!!this.props.tasks.length} onClick={CheckedAll}>
              {checked ? 'Select All' : 'Remuve all selected'}
            </button>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Task
