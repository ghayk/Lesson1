import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { isRequired, minLength, maxLength, email } from '../helpers/validate'

export const ContextContactForm = React.createContext()

function ContextContactProvider(props) {
  const ConForm = [
    { name: 'name', type: 'text', controlId: 'formBasicName' },
    { name: 'email', type: 'email', controlId: 'formBasicEmail' },
    { name: 'message', as: 'textarea', controlId: 'formBasicEmail' },
  ]
  const [state, setState] = useState({
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
  })
  const [errorMessage, setErrorMessage] = useState('')

  const handleValue = (e) => {
    const { name, value } = e.target
    let error = null
    switch (name) {
      case 'name':
      case 'email':
      case 'message':
        error =
          isRequired(value) ||
          minLength(value) ||
          maxLength(value) ||
          email(value, name)
        break
      default:
    }
    setState({
      ...state,
      [name]: { value: value, valid: !!!error, error: error },
    })
  }

  const SaveContactInfo = () => {
    let error = state.name.error || state.email.error || state.message.error
    setErrorMessage(error)
    const formData = { ...state }
    for (let key in formData) {
      formData[key] = formData[key].value
    }
    if (error) return
    fetch('http://localhost:3001/form', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        props.history.push('/')
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
  const disabled = () => {
    const { name, email, message } = state
    return name.valid && email.valid && message.valid
  }
  return (
    <ContextContactForm.Provider
      value={{
        ConForm,
        state,
        errorMessage,
        handleValue,
        SaveContactInfo,
        disabled,
      }}
    >
      {props.children}
    </ContextContactForm.Provider>
  )
}

export default withRouter(ContextContactProvider)
