import {
  GET_TASKS,
  IS_LOADING,
  DELL_ONE_TASK,
  ADD_TASK,
  TOGGLE_CHECK_TASK,
  TOGGLE_CHECK_TASK_NUL,
  DELL_CHECKED_TASKS,
  EDIT_TASK,
  CHECKED_ALL,
  SINGLE_TASK_EDIT_TASK,
  SINGLE_TASK_SET_DATA,
  SINGLE_TASK_TOOGLE_EDIT,
} from '../Redux/actionTypes'
export const setTasksThunk = () => (dispatch) => {
  dispatch({ type: IS_LOADING, loading: true })
  fetch('http://localhost:3001/task')
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw data.error
      }
      dispatch({ type: GET_TASKS, tasks: data })
    })
    .catch((err) => console.error('ERR', err.message))
    .finally(() => {
      dispatch({ type: IS_LOADING, loading: false })
    })
}
export const CloseTaskThunk = (id) => (dispatch) => {
  dispatch({ type: IS_LOADING, loading: true })
  fetch('http://localhost:3001/task/' + id, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw data.error
      }
      dispatch({ type: DELL_ONE_TASK, id })
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      dispatch({ type: IS_LOADING, loading: false })
    })
}
export const AddTaskThunk = (task) => (dispatch) => {
  dispatch({ type: IS_LOADING, loading: true })
  if (!task.title || !task.description) return
  task.date = task.date.toISOString().slice(0, 10)
  fetch('http://localhost:3001/task', {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw data.error
      }
      dispatch({ type: ADD_TASK, task: data })
    })
    .catch((err) => console.error('ERR', err.message))
    .finally(() => {
      dispatch({ type: IS_LOADING, loading: false })
    })
}
export const toggleIdThunk = (id) => (dispatch) => {
  dispatch({ type: TOGGLE_CHECK_TASK, id })
}
export const DellTasksThunk = (selectedId) => (dispatch) => {
  dispatch({ type: IS_LOADING, loading: true })
  fetch('http://localhost:3001/task', {
    method: 'PATCH',
    body: JSON.stringify({ tasks: Array.from(selectedId) }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw data.error
      }
      dispatch({ type: DELL_CHECKED_TASKS })
      dispatch({ type: TOGGLE_CHECK_TASK_NUL })
    })
    .catch((e) => console.error(e))
    .finally(() => {
      dispatch({ type: IS_LOADING, loading: false })
    })
}
export const EditTaskThunk = (task) => (dispatch) => {
  dispatch({ type: IS_LOADING, loading: true })
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
      dispatch({ type: EDIT_TASK, task: data })
      dispatch({ type: SINGLE_TASK_EDIT_TASK, data })
    })
    .catch((error) => {
      console.error('Edit Task Request', error)
    })
    .finally(() => {
      dispatch({ type: IS_LOADING, loading: false })
    })
}
export const CheckedAllThunk = () => (dispatch) => {
  dispatch({ type: CHECKED_ALL })
}

export const setTaskThunk = (match, history) => (dispatch) => {
  dispatch({ type: IS_LOADING, loading: true })
  const { id } = match.params
  fetch(`http://localhost:3001/task/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw data.error
      }
      dispatch({ type: SINGLE_TASK_SET_DATA, data })
    })
    .catch(() => {
      history.push('/404')
    })
    .finally(() => {
      dispatch({ type: IS_LOADING, loading: false })
    })
}
export const toogleEditThunk = () => (dispatch) => {
  dispatch({ type: SINGLE_TASK_TOOGLE_EDIT })
}
export const toggleStatusThunk = (task) => (dispatch) => {
  dispatch({ type: IS_LOADING, loading: true })
  const status = task.status === 'active' ? 'done' : 'active'
  fetch('http://localhost:3001/task/' + task._id, {
    method: 'PUT',
    body: JSON.stringify({ status }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw data.error
      }
      dispatch({ type: EDIT_TASK, task: data })
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      dispatch({ type: IS_LOADING, loading: false })
    })
}
export const searchTasksThunk = (queryData) => (dispatch) => {
  let query = '?'
  for (let key in queryData) {
    query += key + '=' + queryData[key] + '&'
  }
  dispatch({ type: IS_LOADING, loading: true })
  fetch('http://localhost:3001/task/' + query.slice(0, query.length - 1))
    .then((res) => res.json())
    .then((data) => {
      if (data.error) throw data.error
      dispatch({ type: GET_TASKS, tasks: data })
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      dispatch({ type: IS_LOADING, loading: false })
    })
}
