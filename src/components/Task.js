import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
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
          <div
            onDoubleClick={() => togleId(item._id)}
            className={`block ${item.checked ? 'checked' : ''}`}
          >
            {item.title}
            <button
              disabled={Disabled()}
              className="btnClose"
              onClick={() => CloseTask(item._id)}
            >
              <FontAwesomeIcon icon={faWindowClose} />
            </button>
            <input
              className="checkbox"
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
          {this.props.tasks.length === 0 ? (
            <p style={{ color: 'white' }}>list is empty</p>
          ) : (
            tasks
          )}
        </Row>

        <div
          className={`ConBtn ${this.props.tasks.length === 0 ? 'empty' : ''}`}
        >
          <button
            className="SelectAll"
            style={{ display: this.props.tasks.length ? 'block' : 'none' }}
            onClick={CheckedAll}
          >
            {checked ? 'Remove Selected' : 'Select All'}
          </button>
          <button
            className="btn-dell-tasks"
            onClick={DellTasks}
            style={{ display: Disabled() ? 'block' : 'none' }}
          >
            Dell selected
          </button>
        </div>
      </Container>
    )
  }
}
Task.propTypes = {
  CheckedAll: PropTypes.func.isRequired,
  CloseTask: PropTypes.func.isRequired,
  DellTasks: PropTypes.func.isRequired,
  Disabled: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  togleId: PropTypes.func.isRequired,
}
export default Task
