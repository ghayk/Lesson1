import { Button } from 'react-bootstrap'
import React, { useEffect, useReducer } from 'react'
import AddAndEditModal from '../AddAndEditModal'
import Loading from '../Loading'
const initialState = {
  task: null,
  edit: false,
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'setData':
      return {
        ...state,
        task: action.data,
      }
    case 'toogleEdit':
      return {
        ...state,
        edit: !state.edit,
      }
    case 'EditTask':
      return {
        ...state,
        task: action.data,
      }
    default:
      throw new Error()
  }
}
function SingleTask(props) {
  const [state, dispath] = useReducer(reducer, initialState)

  useEffect(() => {
    const { id } = props.match.params
    fetch(`http://localhost:3001/task/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        dispath({ type: 'setData', data })
      })
      .catch(() => {
        props.history.push('/404')
      })
  }, [])
  const DelTask = (id) => {
    fetch('http://localhost:3001/task/' + id, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
      })
      .catch((error) => {
        console.error(error)
      })
    props.history.push('/')
  }
  const editFoo = () => {
    dispath({ type: 'toogleEdit' })
  }
  const EditTask = (task) => {
    task.date = task.date.toISOString().slice(0, 10)
    fetch('http://localhost:3001/task/' + task._id, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        dispath({ type: 'EditTask', data })
      })
      .catch((error) => {
        console.error('Edit Task Request', error)
      })
  }
  if (!state.task) {
    return <Loading />
  }

  return (
    <>
      <div className="SingleTask">
        <div className="conSingleTask">
          <div className="STtitle">{'Title - ' + state.task.title}</div>
          <div className="STdescription">
            {'Description - ' + state.task.description}
          </div>
          <div className="STdate">
            {'Date - ' + state.task.date.slice(0, 10)}
          </div>
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
            <Button
              onClick={() => dispath({ type: 'toogleEdit' })}
              variant="outline-success"
            >
              Edit
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => DelTask(state.task._id)}
            >
              Dell
            </Button>
          </div>
        </div>
      </div>
      {state.edit && (
        <AddAndEditModal
          EditTask={EditTask}
          task={state.task}
          edit={state.edit}
          editFoo={editFoo}
          AddOrEdit={'Edit'}
        />
      )}
    </>
  )
}

export default SingleTask
