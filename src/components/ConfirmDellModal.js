import PropTypes from 'prop-types'
import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function ConfirmDellModal(props) {
  const handleClose = () => props.confirmFoo()
  const DellTasks = () => {
    props.DellTasks(props.selectedId)
    handleClose()
  }
  return (
    <>
      <Modal show={props.confirm} onHide={handleClose} animation={false}>
        <Modal.Body
          style={{ color: '#333' }}
          className="d-flex justify-content-center fa-2x"
        >
          Are you sure you want to delete it
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button className="mr-2" variant="secondary" onClick={handleClose}>
            NO
          </Button>
          <Button variant="danger" onClick={DellTasks}>
            YES
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

ConfirmDellModal.propTypes = {
  DellTasks: PropTypes.func,
  confirm: PropTypes.bool,
  confirmFoo: PropTypes.func,
}

export default ConfirmDellModal
