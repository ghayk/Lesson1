import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ConfirmDellModal from './ConfirmDellModal'
import AddAndEditModal from './AddAndEditModal'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

class Task extends PureComponent {
  state = {
    confirm: false,
    edit: false,
    AddOrEdit: '',
    task: {},
  }
  confirmFoo = () => {
    this.setState({ confirm: !this.state.confirm })
  }
  editFoo = (id) => {
    let tasks = [...this.props.tasks]
    tasks = tasks.filter((item) => item._id === id)
    this.setState({ task: tasks[0], edit: !this.state.edit, AddOrEdit: 'Edit' })
  }
  addFoo = () => {
    const task = { title: '', description: '', _id: this.props.id() }
    this.setState({ task, edit: !this.state.edit, AddOrEdit: 'Add' })
  }
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
            <div className="conTitle"> {item.title}</div>
            <div className="conDescription">{item.description}</div>
            <div className="conTrashEdit">
              <Button
                className="mr-2"
                size="sm"
                variant="outline-danger"
                disabled={Disabled()}
                onClick={() => CloseTask(item._id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
              <Button
                onClick={() => this.editFoo(item._id)}
                disabled={Disabled()}
                variant="outline-warning"
                size="sm"
              >
                <FontAwesomeIcon icon={faEdit} />
              </Button>
            </div>
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
            onClick={() => this.addFoo('edit')}
            style={{ background: '#0a5' }}
            className="SelectAll"
          >
            Add
          </button>
          <button
            className="SelectAll"
            style={{ display: this.props.tasks.length ? 'block' : 'none' }}
            onClick={CheckedAll}
          >
            {checked ? 'Remove Selected' : 'Select All'}
          </button>
          <button
            className="btn-dell-tasks"
            onClick={this.confirmFoo}
            style={{ display: Disabled() ? 'block' : 'none' }}
          >
            Dell Selected
          </button>
        </div>
        <ConfirmDellModal
          DellTasks={DellTasks}
          confirmFoo={this.confirmFoo}
          confirm={this.state.confirm}
        />
        {this.state.edit && (
          <AddAndEditModal
            EditTask={this.props.EditTask}
            task={this.state.task}
            edit={this.state.edit}
            editFoo={this.editFoo}
            AddOrEdit={this.state.AddOrEdit}
            AddTask={this.props.AddTask}
          />
        )}
      </Container>
    )
  }
}
Task.propTypes = {
  AddTask: PropTypes.func,
  CheckedAll: PropTypes.func.isRequired,
  CloseTask: PropTypes.func.isRequired,
  DellTasks: PropTypes.func.isRequired,
  Disabled: PropTypes.func.isRequired,
  EditTask: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  id: PropTypes.func,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  togleId: PropTypes.func.isRequired,
}
export default Task
