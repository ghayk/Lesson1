import {
  IS_LOADING,
  SET_ERROR_MESSAGE,
  SET_SUCCESS_MESSAGE,
} from '../actionTypes'

const initialState = {
  loading: false,
  successMessage: null,
  errorMessage: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        loading: action.loading,
      }
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.errorMessage,
      }
    case SET_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.successMessage,
      }
    default:
      return state
  }
}

export default reducer
