import { connect } from 'react-redux'
import { Button, Form } from 'react-bootstrap'

const InputResult = (props) => {
  return (
    <div
      style={{
        width: '200px',
        height: '100px',
        color: '#fff',
        margin: '10px auto',
        textAlign: 'center',
      }}
    >
      <Form.Control
        type="text"
        placeholder="Enter text"
        onChange={(e) => props.getInputValue(e.target.value)}
        value={props.inputValue}
      />
      <h3>Value : {props.inputValue}</h3>
      <Button onClick={props.resetInputValue} variant="outline-warning">
        reset
      </Button>
    </div>
  )
}

const PravInput = connect(
  (state) => {
    return {
      inputValue: state.inputValue,
    }
  },
  (dispatch) => {
    return {
      getInputValue: (value) => dispatch({ type: 'getInputValue', value }),
      resetInputValue: () => dispatch({ type: 'resetInputValue' }),
    }
  }
)(InputResult)

export default PravInput
