import React, { useState, useEffect } from 'react'
import Task from '../Task'
import id from '../../helpers/IdGenerator'
import Loading from '../Loading'
function ToDo() {
  const [tasks, setTasks] = useState([])
  const [checked, setChecked] = useState(false)
  const [selectedId, setSelectedId] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3001/task')
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        setTasks(data)
      })
      .catch((err) => console.error('ERR', err.message))
      .finally(() => {
        setLoading(false)
      })
  }, [])
  const CloseTask = (id) => {
    setLoading(true)
    fetch('http://localhost:3001/task/' + id, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        let cloneTasks = [...tasks]
        cloneTasks = cloneTasks.filter((item) => item._id !== id)
        setTasks(cloneTasks)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  const AddTask = (task) => {
    setLoading(true)
    if (!task.title || !task.description) return
    const cloneTasks = [...tasks]
    task.date = task.date.toISOString().slice(0, 10)
    fetch('http://localhost:3001/task', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        cloneTasks.push(data)
        setTasks(cloneTasks)
      })
      .catch((err) => console.error('ERR', err.message))
      .finally(() => {
        setLoading(false)
      })
  }
  const togleId = (id) => {
    let cloeSelectedId = [...selectedId]
    if (cloeSelectedId.includes(id)) {
      cloeSelectedId = cloeSelectedId.filter((i) => i !== id)
    } else {
      cloeSelectedId.push(id)
    }
    setSelectedId(cloeSelectedId)
  }
  const DellTasks = () => {
    setLoading(true)
    fetch('http://localhost:3001/task', {
      method: 'PATCH',
      body: JSON.stringify({ tasks: Array.from(selectedId) }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        let cloneTasks = [...tasks]
        let cloneSelectedId = [...selectedId]
        cloneTasks = cloneTasks.filter(
          (item) => !cloneSelectedId.includes(item._id)
        )
        setTasks(cloneTasks)
        setSelectedId([])
      })
      .catch((e) => console.error(e))
      .finally(() => {
        setLoading(false)
      })
  }
  const Disabled = () => {
    return !!selectedId.length
  }
  const CheckedAll = () => {
    let cloneTasks = tasks
    let cloneSelectedId = [...selectedId]
    if (!checked) {
      cloneTasks.forEach((item) => {
        if (!cloneSelectedId.includes(item._id)) {
          cloneSelectedId.push(item._id)
        }
      })
      setSelectedId(cloneSelectedId)
      setChecked(!checked)
    } else {
      setSelectedId([])
      setChecked(!checked)
    }
  }
  const EditTask = (task) => {
    setLoading(true)
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
        let cloneTasks = [...tasks]
        cloneTasks = cloneTasks.map((item) => {
          if (item._id === task._id) {
            item = task
          }
          return item
        })
        setTasks(cloneTasks)
      })
      .catch((error) => {
        console.error('Edit Task Request', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  if (loading) {
    return <Loading />
  }
  return (
    <>
      <Task
        CloseTask={CloseTask}
        tasks={tasks}
        togleId={togleId}
        DellTasks={DellTasks}
        Disabled={Disabled}
        CheckedAll={CheckedAll}
        EditTask={EditTask}
        AddTask={AddTask}
        id={id}
        selectedId={selectedId}
      />
    </>
  )
}

export default ToDo
