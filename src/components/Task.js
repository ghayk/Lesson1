import React from 'react'
import PropTypes from 'prop-types'
import ConfirmDellModal from './ConfirmDellModal'
import AddAndEditModal from './AddAndEditModal'
import Search from './Search'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import {
  faTrash,
  faEdit,
  faHourglassHalf,
  faCheck,
  faPlus,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'

function Task(props) {
  const {
    //state
    confirm,
    edit,
    AddOrEdit,
    task,
    serach,
    //foo
    confirmFoo,
    editFoo,
    setEditTask,
    addFoo,
    toogleSerach,
    //todo
    CloseTask,
    toggleId,
    DellTasks,
    Disabled,
    CheckedAll,
    selectedId,
  } = props
  const tasks = props.tasks.map((item) => {
    return (
      <Col key={item._id} className="col" xs={6} sm={4} md={3} lg={2}>
        <div
          className={`block ${selectedId.includes(item._id) ? 'checked' : ''}`}
        >
          <Link className="TaskLink" to={`/task/${item._id}`}>
            <div className="conTitle">{item.title}</div>
          </Link>
          <div className="conDescription">{item.description}</div>
          <div className="conDate">{item.date.slice(0, 10)}</div>
          <div className="conTrashEdit">
            <Button
              size="sm"
              variant="outline-danger"
              disabled={Disabled()}
              onClick={() => CloseTask(item._id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Button
              className="m-2"
              onClick={() => {
                editFoo()
                setEditTask(item._id, props.tasks)
              }}
              disabled={Disabled()}
              variant="outline-warning"
              size="sm"
            >
              <FontAwesomeIcon icon={faEdit} />
            </Button>
            <Button
              onClick={() => props.toggleStatus(item)}
              disabled={Disabled()}
              variant="outline-success"
              size="sm"
            >
              <FontAwesomeIcon
                icon={item.status === 'active' ? faCheck : faHourglassHalf}
              />
            </Button>
          </div>
          <input
            checked={selectedId.includes(item._id)}
            className="checkbox"
            type="checkbox"
            onChange={() => toggleId(item._id)}
          />
        </div>
      </Col>
    )
  })

  return (
    <Container>
      <div className={`ConBtn ${props.tasks.length === 0 ? 'empty' : ''}`}>
        <Button
          onClick={toogleSerach}
          variant="outline-info"
          disabled={Disabled()}
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>
        <Button
          onClick={addFoo}
          variant="outline-success"
          disabled={Disabled()}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <Button
          variant="outline-primary"
          style={{ display: props.tasks.length ? 'block' : 'none' }}
          onClick={CheckedAll}
        >
          <FontAwesomeIcon icon={faCheck} />
        </Button>
        <Button
          variant="outline-danger"
          onClick={confirmFoo}
          disabled={!Disabled()}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
      {serach && <Search />}
      <Row className="justify-content-center">
        {props.tasks.length === 0 ? (
          <p style={{ color: 'white' }}>list is empty</p>
        ) : (
          tasks
        )}
      </Row>

      <ConfirmDellModal
        DellTasks={DellTasks}
        confirmFoo={confirmFoo}
        confirm={confirm}
        selectedId={selectedId}
      />
      {edit && (
        <AddAndEditModal
          EditTask={props.EditTask}
          task={task}
          edit={edit}
          editFoo={editFoo}
          AddOrEdit={AddOrEdit}
          AddTask={props.AddTask}
        />
      )}
    </Container>
  )
}
Task.propTypes = {
  AddTask: PropTypes.func,
  CheckedAll: PropTypes.func,
  CloseTask: PropTypes.func,
  DellTasks: PropTypes.func,
  Disabled: PropTypes.func,
  EditTask: PropTypes.func,
  checked: PropTypes.func,
  id: PropTypes.func,
  tasks: PropTypes.arrayOf(PropTypes.object),
  togleId: PropTypes.func,
}
const TaskProvider = connect(
  (state) => {
    const { confirm, edit, AddOrEdit, task, serach } = state.taskState
    return {
      confirm,
      edit,
      AddOrEdit,
      task,
      serach,
    }
  },
  (dispatch) => {
    return {
      confirmFoo: () => dispatch({ type: 'confirmFoo' }),
      editFoo: () => dispatch({ type: 'editFoo' }),
      setEditTask: (id, tasks) => dispatch({ type: 'setEditTask', id, tasks }),
      addFoo: () => dispatch({ type: 'addFoo' }),
      toogleSerach: () => dispatch({ type: 'toogleSerach' }),
    }
  }
)(Task)
export default TaskProvider
