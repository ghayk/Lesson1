import React, { useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import ucFirst from '../helpers/ucFirst'
import { ContextContactForm } from '../context/ContextContactForm'

function ContactForm() {
  const ContactContext = useContext(ContextContactForm)
  const {
    ConForm,
    state,
    errorMessage,
    handleValue,
    SaveContactInfo,
    disabled,
  } = ContactContext
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
      <div style={{ color: 'red', margin: '0 auto' }}>{errorMessage}</div>
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
