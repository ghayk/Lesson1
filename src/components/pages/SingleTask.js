import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'

class SingleTask extends React.Component {
  state = {
    task: null,
  }
  componentDidMount() {
    const id = window.location.pathname.slice(6, 30)
    fetch(`http://localhost:3001/task/${id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ task: data })
      })
  }
  DelTask = () => {
    const id = window.location.pathname.slice(6, 30)
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
  }
  render() {
    const { task } = this.state
    if (!this.state.task) {
      return <h2 style={{ color: '#ccc', textAlign: 'center' }}>loading...</h2>
    }
    return (
      <div className="SingleTask">
        <div className='conSingleTask'>
        <div className="STtitle">{task.title}</div>
        <div className="STdescription">{task.description}</div>
        <div className="STdate">{task.date.slice(0, 10)}</div>
        <div>
          <Link to='/'><Button>Go to Home</Button></Link>
          <Link to="/">
            <Button variant="danger" onClick={this.DelTask}>Dell</Button>
          </Link>
        </div>
        </div>
      </div>
    )
  }
}
export default SingleTask
