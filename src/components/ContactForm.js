import React from 'react'
import { Form, Button } from 'react-bootstrap'
import ucFirst from '../helpers/ucFirst'
import { connect } from 'react-redux'
import { handleValueThunk, SaveContactInfoThunk } from '../Redux/actions'
import { ConForm } from '../Redux/reducers/contactReducer'
function ContactForm(props) {
  const { state, handleValue, SaveContactInfo, history } = props

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
        onClick={() => SaveContactInfo(state, history)}
        style={{ margin: '10px auto', width: '100px' }}
        variant="primary"
        disabled={!disabled()}
      >
        Submit
      </Button>
    </Form>
  )
}

const ContactProvider = connect(
  (state) => {
    return {
      state: state.contactState,
    }
  },
  (dispatch) => {
    return {
      handleValue: (e) => dispatch(handleValueThunk(e)),
      SaveContactInfo: (state, history) =>
        dispatch(SaveContactInfoThunk(state, history)),
    }
  }
)(ContactForm)
export default ContactProvider
