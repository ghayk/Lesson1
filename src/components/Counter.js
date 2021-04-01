import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

const Counter = (props) => {
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
      <h2>Counter : {props.counter}</h2>
      <div>
        <Button onClick={props.minus} variant="outline-danger">
          -
        </Button>
        <Button
          onClick={props.reset}
          variant="outline-warning"
          style={{ margin: '10px' }}
        >
          0
        </Button>
        <Button onClick={props.plus} variant="outline-primary">
          +
        </Button>
      </div>
    </div>
  )
}
const PravCounter = connect(
  (state) => {
    return {
      counter: state.counter,
    }
  },
  (dispatch) => {
    return {
      plus: () => dispatch({ type: 'plusCount' }),
      minus: () => dispatch({ type: 'minusCount' }),
      reset: () => dispatch({ type: 'resetCount' }),
    }
  }
)(Counter)
export default PravCounter
