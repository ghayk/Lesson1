import PropTypes from "prop-types";
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
class Add extends Component {
  constructor(props){
    super(props)
    this.inputRef = React.createRef()
    this.state = {
      inputValue: '',
    }
  }
  handleValue = (e) => {
    this.setState({ inputValue: e.target.value })
  }
  AddTask = () => {
    this.props.AddTask(this.state.inputValue)
    this.setState({ inputValue: '' })
  }
  intputEnter = (e) => {
    if (e.key === 'Enter') {
      this.AddTask()
    }
  }
  componentDidMount(){
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div className='addTask'>
        <input
          className="inputAdd"
          onChange={this.handleValue}
          value={this.state.inputValue}
          onKeyDown={this.intputEnter}
          disabled={this.props.Disabled()}
          ref={this.inputRef}
        />
        <button
          className="btnAdd"
          onClick={this.AddTask}
          disabled={!!!this.state.inputValue}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    )
  }
}

Add.propTypes = {
  AddTask: PropTypes.func,
  Disabled: PropTypes.func
}


export default Add
