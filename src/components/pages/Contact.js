import React from 'react'
import { Form, Button } from 'react-bootstrap'
import ucFirst from '../../helpers/ucFirst'
import { withRouter } from 'react-router-dom'
import { isRequired, minLength, maxLength, email } from '../../helpers/validate'

const ContactForm = [
  { name: 'name', type: 'text', controlId: 'formBasicName' },
  { name: 'email', type: 'email', controlId: 'formBasicEmail' },
  { name: 'message', as: 'textarea', controlId: 'formBasicEmail' },
]

class Contact extends React.Component {
  state = {
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
    isValid: false,
  }
  handleValue = (e) => {
    const { name, value } = e.target
    let error = ''
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
    this.setState({
      [name]: { value, valid: !!!error, error },
      isValid: !!!error,
    })
  }
  SaveContactInfo = () => {
    const formData = { ...this.state }
    delete formData.errorMessage
    delete formData.isValid
    for (let key in formData) {
      formData[key] = formData[key].value
    }
    if (!this.state.name || !this.state.email || !this.state.message) return
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
        this.props.history.push('/')
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message })
      })
  }
  render() {
    const form = ContactForm.map((item, index) => {
      return (
        <Form.Group key={index} controlId={item.controlId}>
          <Form.Label>{ucFirst(item.name)}</Form.Label>
          <Form.Control
            name={item.name}
            type={item.type}
            placeholder={ucFirst(item.name)}
            as={item.as}
            onChange={this.handleValue}
            value={this.state[item.name].value}
          />
          <Form.Text style={{ color: 'red' }}>
            {this.state[item.name].error}
          </Form.Text>
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
          {this.state.errorMessage.slice(6)}
        </div>
        {form}
        <Button
          onClick={this.SaveContactInfo}
          style={{ margin: '10px auto', width: '100px' }}
          variant="primary"
          disabled={!this.state.isValid}
        >
          Submit
        </Button>
      </Form>
    )
  }
}

export default withRouter(Contact)
