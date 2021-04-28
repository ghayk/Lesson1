import {
  TOOGLE_SEARCH,
  CONFIRM_FOO,
  EDIT_FOO,
  SET_EDIT_TASK,
  ADD_FOO,
} from '../actionTypes'
import id from '../../helpers/IdGenerator'

const initialState = {
  confirm: false,
  edit: false,
  AddOrEdit: '',
  task: '',
  serach: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_SEARCH:
      return {
        ...state,
        serach: !state.serach,
      }
    case CONFIRM_FOO:
      return {
        ...state,
        confirm: !state.confirm,
      }
    case EDIT_FOO:
      return {
        ...state,
        edit: !state.edit,
      }
    case SET_EDIT_TASK:
      let tasks = [...action.tasks]
      tasks = tasks.filter((item) => item._id === action.id)
      return {
        ...state,
        task: tasks[0],
        AddOrEdit: 'Edit',
      }
    case ADD_FOO:
      const task = {
        title: '',
        description: '',
        _id: id(),
      }
      return {
        ...state,
        task,
        edit: !state.edit,
        AddOrEdit: 'Add',
      }
    default:
      return state
  }
}

export default reducer
