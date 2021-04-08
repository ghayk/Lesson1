import {
  setInputValue,
  setDropDownValue,
  setDate,
  resetAll,
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
    case setInputValue:
      return {
        ...state,
        search: action.value,
      }
    case setDropDownValue:
      const { value, dropDownType } = action
      return {
        ...state,
        [dropDownType]: value,
      }
    case setDate:
      const { date, dateType } = action
      return {
        ...state,
        [dateType]: date,
      }
    case resetAll:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default reducer
