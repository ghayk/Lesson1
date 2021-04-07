import { Button } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AddAndEditModal from '../AddAndEditModal'
import Loading from '../Loading'
import {
  setTaskThunk,
  dellTaskThunk,
  EditTaskThunk,
  toogleEditThunk,
} from '../../Redux/actions'

function SingleTask(props) {
  const { task, edit, setTask, delTask, EditTask, toogleEdit } = props

  useEffect(() => {
    setTask(props.match, props.history)
  }, [setTask, props.match, props.history])
  const editFoo = () => {
    toogleEdit()
  }

  if (!task) {
    return <Loading />
  }

  return (
    <>
      <div className="SingleTask">
        <div className="conSingleTask">
          <div className="STtitle">{'Title - ' + task.title}</div>
          <div className="STdescription">
            {'Description - ' + task.description}
          </div>
          <div className="STdate">{'Date - ' + task.date.slice(0, 10)}</div>
          <div
            style={{
              display: 'flex',
              marginTop: '20px',
              width: '250px',
              justifyContent: 'space-between',
            }}
          >
            <Button
              variant="outline-primary"
              onClick={() => props.history.push('/')}
            >
              Go to Home
            </Button>
            <Button onClick={() => toogleEdit()} variant="outline-success">
              Edit
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => {
                delTask(task._id)
                props.history.push('/')
              }}
            >
              Dell
            </Button>
          </div>
        </div>
      </div>
      {edit && (
        <AddAndEditModal
          EditTask={EditTask}
          task={task}
          edit={edit}
          editFoo={editFoo}
          AddOrEdit={'Edit'}
        />
      )}
    </>
  )
}

const SingleTaskProvider = connect(
  (state) => {
    const { task, edit } = state.singleTaskState
    return {
      task,
      edit,
    }
  },
  (dispatch) => {
    return {
      toogleEdit: () => dispatch(toogleEditThunk()),
      setTask: (props) => dispatch(setTaskThunk(props)),
      delTask: (id) => dispatch(dellTaskThunk(id)),
      EditTask: (task) => dispatch(EditTaskThunk(task)),
    }
  }
)(SingleTask)
export default SingleTaskProvider
