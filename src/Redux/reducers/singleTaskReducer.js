import {
  SINGLE_TASK_EDIT_TASK,
  SINGLE_TASK_SET_DATA,
  SINGLE_TASK_TOOGLE_EDIT,
} from '../actionTypes'
const initialState = {
  task: null,
  edit: false,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_TASK_SET_DATA:
      return {
        ...state,
        task: action.data,
      }
    case SINGLE_TASK_TOOGLE_EDIT:
      return {
        ...state,
        edit: !state.edit,
      }
    case SINGLE_TASK_EDIT_TASK:
      return {
        ...state,
        task: action.data,
      }
    default:
      return state
  }
}
export default reducer
