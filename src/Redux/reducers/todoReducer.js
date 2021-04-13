import {
  GET_TASKS,
  CHECKED_ALL_TASKS,
  HANDLE_SELECTED_ID,
  DELL_ONE_TASK,
  ADD_TASK,
  TOGGLE_CHECK_TASK,
  TOGGLE_CHECK_TASK_NUL,
  DELL_CHECKED_TASKS,
  EDIT_TASK,
  CHECKED_ALL,
} from '../../Redux/actionTypes'

const initialState = {
  tasks: [],
  checked: false,
  selectedId: [],
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS: {
      return {
        ...state,
        tasks: action.tasks,
      }
    }
    case CHECKED_ALL_TASKS: {
      return {
        ...state,
        checked: action.checked,
      }
    }
    case HANDLE_SELECTED_ID: {
      return {
        ...state,
        selectedId: action.selectedId,
      }
    }
    case DELL_ONE_TASK: {
      let tasks = [...state.tasks]
      tasks = tasks.filter((item) => item._id !== action.id)
      return {
        ...state,
        tasks,
      }
    }
    case ADD_TASK: {
      let tasks = [...state.tasks]
      tasks.push(action.task)
      return {
        ...state,
        tasks,
      }
    }
    case TOGGLE_CHECK_TASK: {
      let selectedId = [...state.selectedId]
      if (selectedId.includes(action.id)) {
        selectedId = selectedId.filter((i) => i !== action.id)
      } else {
        selectedId.push(action.id)
      }
      return {
        ...state,
        selectedId,
      }
    }
    case TOGGLE_CHECK_TASK_NUL: {
      return {
        ...state,
        selectedId: [],
      }
    }
    case DELL_CHECKED_TASKS: {
      let tasks = [...state.tasks]
      let selectedId = [...state.selectedId]
      tasks = tasks.filter((item) => !selectedId.includes(item._id))
      return {
        ...state,
        tasks,
      }
    }
    case EDIT_TASK: {
      let tasks = [...state.tasks]
      tasks = tasks.map((item) => {
        if (item._id === action.task._id) {
          item = action.task
        }
        return item
      })
      return {
        ...state,
        tasks,
      }
    }
    case CHECKED_ALL: {
      let tasks = [...state.tasks]
      let selectedId = [...state.selectedId]
      if (!state.checked) {
        tasks.forEach((item) => {
          if (!selectedId.includes(item._id)) {
            selectedId.push(item._id)
          }
        })
        return {
          ...state,
          selectedId,
          checked: !state.checked,
        }
      } else {
        return {
          ...state,
          selectedId: [],
          checked: !state.checked,
        }
      }
    }
    default:
      return state
  }
}
export default reducer
