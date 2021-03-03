import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
class Add extends Component {
  constructor(props) {
    super(props)
    this.titleRef = React.createRef()
    this.state = {
      titleValue: '',
      descriptionValue: '',
    }
  }
  handleValue = (e) => {
    if (e.target.name === 'title') {
      this.setState({ titleValue: e.target.value })
    } else this.setState({ descriptionValue: e.target.value })
  }
  AddTask = () => {
    this.props.AddTask(this.state.titleValue,this.state.descriptionValue)
    this.setState({ titleValue: '' ,descriptionValue: ''})
  }
  intputEnter = (e) => {
    if (e.key === 'Enter') {
      this.AddTask()
    }
  }
  componentDidMount() {
    this.titleRef.current.focus()
  }
  render() {
    return (
      <div className="addTask">
        <input
          name="title"
          placeholder="Title"
          className="inputAdd"
          onChange={this.handleValue}
          value={this.state.titleValue}
          onKeyDown={this.intputEnter}
          disabled={this.props.Disabled()}
          ref={this.titleRef}
          />
        <textarea
          name="description"
          onChange={this.handleValue}
          className="inputAdd"
          onKeyDown={this.intputEnter}
          placeholder="Description"
          disabled={this.props.Disabled()}
          value={this.state.descriptionValue}
          
        />
        <div>
          <button
            className="btnAdd"
            onClick={this.AddTask}
            disabled={!!!this.state.titleValue || !!!this.state.descriptionValue}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    )
  }
}

Add.propTypes = {
  AddTask: PropTypes.func,
  Disabled: PropTypes.func,
}

export default Add
