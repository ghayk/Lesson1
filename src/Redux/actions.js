import {
  getTasks,
  isLoading,
  dellOneTask,
  addTask,
  toggleCheckTask,
  toggleCheckTaskNul,
  dellCheckedTasks,
  editTask,
  CheckedAll,
  SingleTaskEditTask,
  SingleTaskSetData,
  SingleTaskToogleEdit,
} from '../Redux/actionTypes'
export const setTasksThunk = () => (dispatch) => {
  dispatch({ type: isLoading, loading: true })
  fetch('http://localhost:3001/task')
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw data.error
      }
      dispatch({ type: getTasks, tasks: data })
    })
    .catch((err) => console.error('ERR', err.message))
    .finally(() => {
      dispatch({ type: isLoading, loading: false })
    })
}
export const CloseTaskThunk = (id) => (dispatch) => {
  dispatch({ type: isLoading, loading: true })
  fetch('http://localhost:3001/task/' + id, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw data.error
      }
      dispatch({ type: dellOneTask, id })
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      dispatch({ type: isLoading, loading: false })
    })
}
export const AddTaskThunk = (task) => (dispatch) => {
  dispatch({ type: isLoading, loading: true })
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
      dispatch({ type: addTask, task: data })
    })
    .catch((err) => console.error('ERR', err.message))
    .finally(() => {
      dispatch({ type: isLoading, loading: false })
    })
}
export const toggleIdThunk = (id) => (dispatch) => {
  dispatch({ type: toggleCheckTask, id })
}
export const DellTasksThunk = (selectedId) => (dispatch) => {
  dispatch({ type: isLoading, loading: true })
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
      dispatch({ type: dellCheckedTasks })
      dispatch({ type: toggleCheckTaskNul })
    })
    .catch((e) => console.error(e))
    .finally(() => {
      dispatch({ type: isLoading, loading: false })
    })
}
export const EditTaskThunk = (task) => (dispatch) => {
  dispatch({ type: isLoading, loading: true })
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
      dispatch({ type: editTask, task: data })
      dispatch({ type: SingleTaskEditTask, data })
    })
    .catch((error) => {
      console.error('Edit Task Request', error)
    })
    .finally(() => {
      dispatch({ type: isLoading, loading: false })
    })
}
export const CheckedAllThunk = () => (dispatch) => {
  dispatch({ type: CheckedAll })
}

export const setTaskThunk = (match, history) => (dispatch) => {
  dispatch({ type: isLoading, loading: true })
  const { id } = match.params
  fetch(`http://localhost:3001/task/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw data.error
      }
      dispatch({ type: SingleTaskSetData, data })
    })
    .catch(() => {
      history.push('/404')
    })
    .finally(() => {
      dispatch({ type: isLoading, loading: false })
    })
}
export const dellTaskThunk = (id) => (dispatch) => {
  dispatch({ type: isLoading, loading: true })
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
    .finally(() => {
      dispatch({ type: isLoading, loading: false })
    })
}
export const toogleEditThunk = () => (dispatch) => {
  dispatch({ type: SingleTaskToogleEdit })
}
export const toggleStatusThunk = (task) => (dispatch) => {
  dispatch({ type: isLoading, loading: true })
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
      dispatch({ type: editTask, task: data })
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      dispatch({ type: isLoading, loading: false })
    })
}
export const searchTasksThunk = (queryData) => (dispatch) => {
  git
  let query = '?'
  for (let key in queryData) {
    query += key + '=' + queryData[key] + '&'
  }
  dispatch({ type: isLoading, loading: true })
  fetch('http://localhost:3001/task/' + query.slice(0, query.length - 1))
    .then((res) => res.json())
    .then((data) => {
      if (data.error) throw data.error
      dispatch({ type: getTasks, tasks: data })
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      dispatch({ type: isLoading, loading: false })
    })
}
