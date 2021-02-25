import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
class Add extends Component {
  state = {
    inputValue: '',
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
  render() {
    return (
      <div className='addTask'>
        <input
          className="inputAdd"
          onChange={this.handleValue}
          value={this.state.inputValue}
          onKeyDown={this.intputEnter}
          disabled={this.props.Disabled()}
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
export default Add
