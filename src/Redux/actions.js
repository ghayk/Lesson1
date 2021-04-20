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
  HANDLE_CONTACT_VALUE,
  SET_ERROR_MESSAGE,
  SET_SUCCESS_MESSAGE,
} from '../Redux/actionTypes'
import { isRequired, minLength, maxLength, email } from '../helpers/validate'
const API_URL = process.env.REACT_APP_API_URL
export const setTasksThunk = () => (dispatch) => {
  dispatch({ type: IS_LOADING, loading: true })
  fetch(`${API_URL}/task`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw data.error
      }
      dispatch({ type: GET_TASKS, tasks: data })
      dispatch({
        type: SET_SUCCESS_MESSAGE,
        successMessage: 'You set tasks Successfully !',
      })
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR_MESSAGE, errorMessage: error.message })
    })
    .finally(() => {
      dispatch({ type: IS_LOADING, loading: false })
    })
}
export const CloseTaskThunk = (id, history = null) => (dispatch) => {
  dispatch({ type: IS_LOADING, loading: true })
  fetch(`${API_URL}/task/` + id, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw data.error
      }
      history ? history.push('/') : dispatch({ type: DELL_ONE_TASK, id })
      dispatch({
        type: SET_SUCCESS_MESSAGE,
        successMessage: 'The Task Was Deleted !',
      })
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR_MESSAGE, errorMessage: error.message })
    })
    .finally(() => {
      dispatch({ type: IS_LOADING, loading: false })
    })
}
export const AddTaskThunk = (task) => (dispatch) => {
  dispatch({ type: IS_LOADING, loading: true })
  if (!task.title || !task.description) return
  task.date = task.date.toISOString().slice(0, 10)
  fetch(`${API_URL}/task`, {
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
      dispatch({
        type: SET_SUCCESS_MESSAGE,
        successMessage: 'You added Task Successfully !',
      })
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR_MESSAGE, errorMessage: error.message })
    })
    .finally(() => {
      dispatch({ type: IS_LOADING, loading: false })
    })
}
export const toggleIdThunk = (id) => (dispatch) => {
  dispatch({ type: TOGGLE_CHECK_TASK, id })
}
export const DellTasksThunk = (selectedId) => (dispatch) => {
  dispatch({ type: IS_LOADING, loading: true })
  fetch(`${API_URL}/task`, {
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
      dispatch({
        type: SET_SUCCESS_MESSAGE,
        successMessage: 'You  delete checked tasks Successfully !',
      })
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR_MESSAGE, errorMessage: error.message })
    })
    .finally(() => {
      dispatch({ type: IS_LOADING, loading: false })
    })
}
export const EditTaskThunk = (task) => (dispatch) => {
  dispatch({ type: IS_LOADING, loading: true })
  task.date = task.date.toISOString().slice(0, 10)
  fetch(`${API_URL}/task/` + task._id, {
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
      dispatch({
        type: SET_SUCCESS_MESSAGE,
        successMessage: 'You  Edit  Task Successfully !',
      })
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR_MESSAGE, errorMessage: error.message })
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
  fetch(`${API_URL}/task/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw data.error
      }
      dispatch({ type: SINGLE_TASK_SET_DATA, data })
      dispatch({
        type: SET_SUCCESS_MESSAGE,
        successMessage: 'Single task Successfully !',
      })
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
  fetch(`${API_URL}/task/` + task._id, {
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
      dispatch({ type: SET_ERROR_MESSAGE, errorMessage: error.message })
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
  fetch(`${API_URL}/task/` + query.slice(0, query.length - 1))
    .then((res) => res.json())
    .then((data) => {
      if (data.error) throw data.error
      dispatch({ type: GET_TASKS, tasks: data })
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR_MESSAGE, errorMessage: error.message })
    })
    .finally(() => {
      dispatch({ type: IS_LOADING, loading: false })
    })
}
export const handleValueThunk = (e) => (dispatch) => {
  const { name, value } = e.target
  let error = null
  switch (name) {
    case 'name':
    case 'email':
    case 'message':
      error =
        isRequired(value) ||
        minLength(value) ||
        maxLength(value) ||
        email(value, name)
      break
    default:
  }
  dispatch({ type: HANDLE_CONTACT_VALUE, name, value, error })
}
export const SaveContactInfoThunk = (state, history) => (dispatch) => {
  console.log('state', state)
  const formData = { ...state }
  delete formData.errorMessage
  console.log('formData', formData)
  for (let key in formData) {
    formData[key] = formData[key].value
  }
  if (!state.name || !state.email || !state.message) return
  fetch(`${API_URL}/form`, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw data.error
      }
      dispatch({
        type: SET_SUCCESS_MESSAGE,
        successMessage: 'Save contact info Successfully !',
      })
      history.push('/')
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR_MESSAGE, errorMessage: error.message })
    })
}
