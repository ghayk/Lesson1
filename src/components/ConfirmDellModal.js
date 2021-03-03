import PropTypes from 'prop-types'
import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class ConfirmDellModal extends React.Component {
  state = {}
  handleClose = () => this.props.confirmFoo()
  DellTasks = () => {
    this.props.DellTasks()
    this.handleClose()
  }
  render() {
    return (
      <>
        <Modal
          show={this.props.confirm}
          onHide={this.handleClose}
          animation={false}
        >
          <Modal.Body className="d-flex justify-content-center fa-2x">
            Are you sure you want to delete it
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button
              className="mr-2"
              variant="secondary"
              onClick={this.handleClose}
            >
              NO
            </Button>
            <Button variant="danger" onClick={this.DellTasks}>
              YES
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

ConfirmDellModal.propTypes = {
  DellTasks: PropTypes.func,
  confirm: PropTypes.bool,
  confirmFoo: PropTypes.func,
}

export default ConfirmDellModal
