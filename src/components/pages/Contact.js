import React from 'react'
import { Form, Button } from 'react-bootstrap'
import ucFirst from '../../helpers/ucFirst'

const ContactForm = [
  { name: 'name', type: 'text', controlId: 'formBasicName' },
  { name: 'email', type: 'email', controlId: 'formBasicEmail' },
  { name: 'message', as: 'textarea', controlId: 'formBasicEmail' },
]
class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
  }
  handleValue = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  SaveContactInfo = (data) => {
    if (!this.state.name || !this.state.email || !this.state.message) return
    fetch('http://localhost:3001/form', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        this.setState({ name: '', email: '', message: '' })
      })
      .catch((err) => {
        console.log('SaveUserInfo Error', err)
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
            value={this.state[item.name]}
          />
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
        {form}
        <Button
          onClick={() => this.SaveContactInfo(this.state)}
          style={{ margin: '10px auto', width: '100px' }}
          variant="primary"
        >
          Submit
        </Button>
      </Form>
    )
  }
}

export default Contact
