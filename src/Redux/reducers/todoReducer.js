import {
  getTasks,
  checkedAllTasks,
  handleSelectedId,
  isLoading,
  dellOneTask,
  addTask,
  toggleCheckTask,
  toggleCheckTaskNul,
  dellCheckedTasks,
  editTask,
  CheckedAll,
} from '../../Redux/actionTypes'

const initialState = {
  tasks: [],
  checked: false,
  selectedId: [],
  loading: false,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case getTasks: {
      return {
        ...state,
        tasks: action.tasks,
      }
    }
    case checkedAllTasks: {
      return {
        ...state,
        checked: action.checked,
      }
    }
    case handleSelectedId: {
      return {
        ...state,
        selectedId: action.selectedId,
      }
    }
    case isLoading: {
      return {
        ...state,
        loading: action.loading,
      }
    }
    case dellOneTask: {
      let tasks = [...state.tasks]
      tasks = tasks.filter((item) => item._id !== action.id)
      return {
        ...state,
        tasks,
      }
    }
    case addTask: {
      let tasks = [...state.tasks]
      tasks.push(action.task)
      return {
        ...state,
        tasks,
      }
    }
    case toggleCheckTask: {
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
    case toggleCheckTaskNul: {
      return {
        ...state,
        selectedId: [],
      }
    }
    case dellCheckedTasks: {
      let tasks = [...state.tasks]
      let selectedId = [...state.selectedId]
      tasks = tasks.filter((item) => !selectedId.includes(item._id))
      return {
        ...state,
        tasks,
      }
    }
    case editTask: {
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
    case CheckedAll: {
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
