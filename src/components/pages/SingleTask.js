import { Button } from 'react-bootstrap'
import React from 'react'
import AddAndEditModal from '../AddAndEditModal'
import Loading from '../Loading'

class SingleTask extends React.Component {
  state = {
    task: null,
    edit: false,
  }
  componentDidMount() {
    const id = this.props.match.params.id
    fetch(`http://localhost:3001/task/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        this.setState({ task: data })
      })
      .catch(() => {
        this.props.history.push('/404')
      })
  }
  DelTask = (id) => {
    fetch('http://localhost:3001/task/' + id, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
      })
      .catch((error) => {
        console.error(error)
      })
    this.props.history.push('/')
  }
  editFoo = () => {
    this.setState({ edit: !this.state.edit })
  }
  EditTask = (task) => {
    task.date = task.date.toISOString().slice(0, 10)
    fetch('http://localhost:3001/task/' + task._id, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        this.setState({ task: data })
      })
      .catch((error) => {
        console.error('Edit Task Request', error)
      })
  }
  GoToHome = () => {
    this.props.history.push('/')
  }
  render() {
    const { task } = this.state
    if (!this.state.task) {
      return <Loading />
    }
    return (
      <>
        <div className="SingleTask">
          <div className="conSingleTask">
            <div className="STtitle">{'Title - ' + task.title}</div>
            <div className="STdescription">
              {'Description - ' + task.description}
            </div>
            <div className="STdate">{'Date - ' + task.date.slice(0, 10)}</div>
            <div
              style={{
                display: 'flex',
                marginTop: '20px',
                width: '250px',
                justifyContent: 'space-between',
              }}
            >
              <Button variant="outline-primary" onClick={this.GoToHome}>
                Go to Home
              </Button>
              <Button
                onClick={() => this.setState({ edit: !this.state.edit })}
                variant="outline-success"
              >
                Edit
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => this.DelTask(task._id)}
              >
                Dell
              </Button>
            </div>
          </div>
        </div>
        {this.state.edit && (
          <AddAndEditModal
            EditTask={this.EditTask}
            task={this.state.task}
            edit={this.state.edit}
            editFoo={this.editFoo}
            AddOrEdit={'Edit'}
          />
        )}
      </>
    )
  }
}
export default SingleTask
