import React, { useEffect } from 'react'
import Task from '../Task'
import id from '../../helpers/IdGenerator'
import Loading from '../Loading'
import { connect } from 'react-redux'
import {
  setTasksThunk,
  CloseTaskThunk,
  AddTaskThunk,
  toggleIdThunk,
  DellTasksThunk,
  EditTaskThunk,
  CheckedAllThunk,
} from '../../Redux/actions'
function ToDo(props) {
  const {
    tasks,
    setTasks,
    selectedId,
    loading,
    CheckedAll,
    CloseTask,
    AddTask,
    toggleId,
    DellTasks,
    EditTask,
  } = props
  useEffect(() => {
    setTasks()
  }, [setTasks])

  const Disabled = () => {
    return !!selectedId.length
  }
  if (loading) {
    return <Loading />
  }
  return (
    <>
      <Task
        CloseTask={CloseTask}
        tasks={tasks}
        toggleId={toggleId}
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
const TodoProvider = connect(
  (state) => {
    const { tasks, checked, selectedId, loading } = state.todoState
    return {
      tasks,
      checked,
      selectedId,
      loading,
    }
  },
  (dispatch) => {
    return {
      setTasks: () => dispatch(setTasksThunk()),
      CloseTask: (id) => dispatch(CloseTaskThunk(id)),
      AddTask: (task) => dispatch(AddTaskThunk(task)),
      toggleId: (id) => dispatch(toggleIdThunk(id)),
      EditTask: (task) => dispatch(EditTaskThunk(task)),
      DellTasks: (selectedId) => dispatch(DellTasksThunk(selectedId)),
      CheckedAll: () => dispatch(CheckedAllThunk()),
    }
  }
)(ToDo)
export default TodoProvider
