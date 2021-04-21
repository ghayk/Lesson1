import {} from '../actionTypes'
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
    case 'toogleSerach':
      return {
        ...state,
        serach: !state.serach,
      }
    case 'confirmFoo':
      return {
        ...state,
        confirm: !state.confirm,
      }
    case 'editFoo':
      return {
        ...state,
        edit: !state.edit,
      }
    case 'setEditTask':
      let tasks = [...action.tasks]
      tasks = tasks.filter((item) => item._id === action.id)
      return {
        ...state,
        task: tasks[0],
        AddOrEdit: 'Edit',
      }
    case 'addFoo':
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
