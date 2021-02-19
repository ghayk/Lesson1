import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

class Task extends Component {
  render() {
    const { CloseTask, togleId, DellTasks, DellAll,Disabled } = this.props
    const tasks = this.props.tasks.map((item) => {
      return (
        <Col key={item._id} className="col" xs={6} sm={4} md={3} lg={2}>
          <div className="block">
            {item.title}
            <button disabled={Disabled()} className="btnClose" onClick={() => CloseTask(item._id)}>
              <FontAwesomeIcon icon={faWindowClose} />
            </button>
            &nbsp;
            <input type="checkbox" onClick={() => togleId(item._id)} />
          </div>
        </Col>
      )
    })

    return (
      <Container>
        <Row className="justify-content-center ">
          {this.props.tasks.length === 0 ? <p>list is empty</p> : tasks}
        </Row>
        <Row>
          <Col>
            <button className="btn-dell-tasks" onClick={DellTasks}>
              Dell tasks
            </button>
          </Col>
          <Col>
            <button onClick={DellAll} className="btn-dell-all-tasks">
              Dell all
            </button>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Task
