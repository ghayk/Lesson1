import {
  SingleTaskEditTask,
  SingleTaskSetData,
  SingleTaskToogleEdit,
} from '../actionTypes'
const initialState = {
  task: null,
  edit: false,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SingleTaskSetData:
      return {
        ...state,
        task: action.data,
      }
    case SingleTaskToogleEdit:
      return {
        ...state,
        edit: !state.edit,
      }
    case SingleTaskEditTask:
      return {
        ...state,
        task: action.data,
      }
    default:
      return state
  }
}
export default reducer
