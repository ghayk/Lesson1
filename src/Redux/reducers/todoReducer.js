import {
  getTasks,
  checkedAllTasks,
  handleSelectedId,
  isLoading,
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
    default:
      return state
  }
}
export default reducer
