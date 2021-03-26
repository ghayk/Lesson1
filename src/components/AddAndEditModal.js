import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import DatePicker from 'react-datepicker'

function AddAndEditModal(props) {
  const [state, setState] = useState({
    ...props.task,
    date: new Date(),
  })
  const handleClose = () => props.editFoo()
  const handleValue = (e) => {
    const { name, value } = e.target
    setState({
      ...state,
      [name]: value,
    })
  }
  const EditTask = () => {
    if (!state.title || !state.description) return
    props.EditTask(state)
    props.editFoo()
  }
  const AddTask = () => {
    if (!state.title || !state.description) return
    props.AddTask(state)
    props.editFoo()
  }
  const hendleSetDate = (date) => {
    setState({ ...state, date })
  }
  return (
    <>
      <Modal show={props.edit} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.AddOrEdit}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center fa-2x">
          <input
            value={state.title}
            onChange={handleValue}
            name="title"
            placeholder="Title"
            className="inputAdd w-75"
          />
          <textarea
            value={state.description}
            onChange={handleValue}
            name="description"
            className="inputAdd w-75"
            placeholder="Description"
          />
          <DatePicker
            selected={state.date}
            onChange={(date) => hendleSetDate(date)}
          />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button className="mr-2" variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={props.AddOrEdit === 'Edit' ? EditTask : AddTask}
          >
            {props.AddOrEdit}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
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
