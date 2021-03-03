import PropTypes from 'prop-types'
import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class EditModal extends React.Component {
  state = {
    ...this.props.task,
  }
  handleClose = () => this.props.editFoo()
  handleValue = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  EditTask = () => {
    if (!this.state.title || !this.state.description) return
    this.props.EditTask(
      this.state.title,
      this.state.description,
      this.state._id
    )
    this.props.editFoo()
  }
  render() {
    return (
      <>
        <Modal
          show={this.props.edit}
          onHide={this.handleClose}
          animation={false}
        >
          <Modal.Body className="d-flex flex-column align-items-center fa-2x">
            <input
              value={this.state.title}
              onChange={this.handleValue}
              name="title"
              placeholder="Title"
              className="inputAdd w-75 text-center"
            />
            <textarea
              value={this.state.description}
              onChange={this.handleValue}
              name="description"
              className="inputAdd w-75"
              placeholder="Description"
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
            <Button variant="danger" onClick={this.EditTask}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

EditModal.propTypes = {
  EditTask: PropTypes.func,
  edit: PropTypes.bool,
  editFoo: PropTypes.func,
  task: PropTypes.object,
}
export default EditModal
