import PropTypes from 'prop-types'
import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import DatePicker from 'react-datepicker'

class AddAndEditModal extends React.Component {
  state = {
    ...this.props.task,
    date: new Date(),
  }
  handleClose = () => this.props.editFoo()
  handleValue = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  EditTask = () => {
    if (!this.state.title || !this.state.description) return
    let state = {...this.state}
    this.props.EditTask(state)
    this.props.editFoo()
  }
  AddTask = () => {
    if (!this.state.title || !this.state.description) return
    this.props.AddTask(this.state)
    this.props.editFoo()
  }
  hendleSetDate = (date) => {    
    this.setState({ date })
  }
  render() {
    return (
      <>
        <Modal
          show={this.props.edit}
          onHide={this.handleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.AddOrEdit}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column align-items-center fa-2x">
            <input
              value={this.state.title}
              onChange={this.handleValue}
              name="title"
              placeholder="Title"
              className="inputAdd w-75"
            />
            <textarea
              value={this.state.description}
              onChange={this.handleValue}
              name="description"
              className="inputAdd w-75"
              placeholder="Description"
            />
            <DatePicker
              selected={this.state.date}
              onChange={date => this.hendleSetDate(date)}
            />
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button
              className="mr-2"
              variant="secondary"
              onClick={this.handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="success"
              onClick={
                this.props.AddOrEdit === 'Edit' ? this.EditTask : this.AddTask
              }
            >
              {this.props.AddOrEdit}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

AddAndEditModal.propTypes = {
  AddOrEdit: PropTypes.string,
  AddTask: PropTypes.func,
  EditTask: PropTypes.func,
  edit: PropTypes.bool,
  editFoo: PropTypes.func,
  task: PropTypes.object,
}
export default AddAndEditModal
