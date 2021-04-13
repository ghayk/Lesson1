import { HANDLE_CONTACT_VALUE } from '../actionTypes'

export const ConForm = [
  { name: 'name', type: 'text', controlId: 'formBasicName' },
  { name: 'email', type: 'email', controlId: 'formBasicEmail' },
  { name: 'message', as: 'textarea', controlId: 'formBasicEmail' },
]

const initialState = {
  name: {
    value: '',
    valid: false,
    error: null,
  },
  email: {
    value: '',
    valid: false,
    error: null,
  },
  message: {
    value: '',
    valid: false,
    error: null,
  },
  errorMessage: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CONTACT_VALUE:
      const { name, value, error } = action
      return {
        ...state,
        [name]: {
          value: value,
          valid: !!!error,
          error: error,
        },
      }
    default:
      return state
  }
}

export default reducer
