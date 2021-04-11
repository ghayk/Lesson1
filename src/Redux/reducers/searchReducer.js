import {
  SET_INPUT_VALUE,
  SET_DROP_DOWN_VALUE,
  SET_DATE,
  RESET_ALL,
} from '../actionTypes'

const initialState = {
  search: '',
  status: '',
  sort: '',
  create_lte: '',
  create_gte: '',
  complete_lte: '',
  complete_gte: '',
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        search: action.value,
      }
    case SET_DROP_DOWN_VALUE:
      const { value, dropDownType } = action
      return {
        ...state,
        [dropDownType]: value,
      }
    case SET_DATE:
      const { date, dateType } = action
      return {
        ...state,
        [dateType]: date,
      }
    case RESET_ALL:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default reducer
