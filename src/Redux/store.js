import { createStore } from 'redux'
const initialState = {
  counter: 0,
  inputValue: '',
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
    default:
      return state
  }
}
const store = createStore(reducer)
export default store
