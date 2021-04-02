import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import ucFirst from '../helpers/ucFirst'
import { isRequired, minLength, maxLength, email } from '../helpers/validate'

const ConForm = [
  { name: 'name', type: 'text', controlId: 'formBasicName' },
  { name: 'email', type: 'email', controlId: 'formBasicEmail' },
  { name: 'message', as: 'textarea', controlId: 'formBasicEmail' },
]
function ContactForm(props) {
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
    errorMessage: '',
  })
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
    const formData = { ...state }
    delete formData.errorMessage
    for (let key in formData) {
      formData[key] = formData[key].value
    }
    if (!state.name || !state.email || !state.message) return
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
        setState({ ...state, errorMessage: err.message })
      })
  }
  const disabled = () => {
    const { name, email, message } = state
    return name.valid && email.valid && message.valid
  }

  const form = ConForm.map((item, index) => {
    return (
      <Form.Group key={index} controlId={item.controlId}>
        <Form.Label>{ucFirst(item.name)}</Form.Label>
        <Form.Control
          name={item.name}
          type={item.type}
          placeholder={ucFirst(item.name)}
          as={item.as}
          onChange={handleValue}
          value={state[item.name].value}
        />
        <Form.Text style={{ color: 'red' }}>{state[item.name].error}</Form.Text>
      </Form.Group>
    )
  })
  return (
    <Form
      style={{
        width: '400px',
        color: '#ccc',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ color: 'red', margin: '0 auto' }}>
        {state.errorMessage.slice(6)}
      </div>
      {form}
      <Button
        onClick={SaveContactInfo}
        style={{ margin: '10px auto', width: '100px' }}
        variant="primary"
        disabled={!disabled()}
      >
        Submit
      </Button>
    </Form>
  )
}

export default ContactForm
