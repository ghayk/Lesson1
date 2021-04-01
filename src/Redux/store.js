import { createStore } from 'redux'
import {
  getTasks,
  checkedAllTasks,
  handleSelectedId,
  isLoading,
} from '../Redux/actionTypes'
const initialState = {
  counter: 0,
  inputValue: '',
  todoState: {
    tasks: [],
    checked: false,
    selectedId: [],
    loading: false,
  },
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'plusCount': {
      return {
        ...state,
        counter: state.counter + 1,
      }
    }
    case 'minusCount': {
      return {
        ...state,
        counter: state.counter - 1,
      }
    }
    case 'resetCount': {
      return {
        ...state,
        counter: 0,
      }
    }
    case 'getInputValue': {
      return {
        ...state,
        inputValue: action.value,
      }
    }
    case 'resetInputValue': {
      return {
        ...state,
        inputValue: '',
      }
    }
    case getTasks: {
      return {
        ...state,
        todoState: {
          ...state.todoState,
          tasks: action.tasks,
        },
      }
    }
    case checkedAllTasks: {
      return {
        ...state,
        todoState: {
          ...state.todoState,
          checked: action.checked,
        },
      }
    }
    case handleSelectedId: {
      return {
        ...state,
        todoState: {
          ...state.todoState,
          selectedId: action.selectedId,
        },
      }
    }
    case isLoading: {
      return {
        ...state,
        todoState: {
          ...state.todoState,
          loading: action.loading,
        },
      }
    }
    default:
      return state
  }
}
const store = createStore(reducer)
export default store
