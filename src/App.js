import React, { useEffect } from 'react'
import './App.css'
import ToDo from './components/pages/ToDo'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import NavBar from './components/NavBar'
import SingleTask from './components/pages/SingleTask'
import ERR_404 from './components/pages/ERR_404'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { connect } from 'react-redux'

const pages = [
  { path: '/', comp: ToDo },
  { path: '/About', comp: About },
  { path: '/Contact', comp: Contact },
  { path: '/task/:id', comp: SingleTask },
  { path: '/404', comp: ERR_404 },
]

function App(props) {
  const { successMessage, errorMessage } = props
  useEffect(() => {
    toast.error(errorMessage)
  }, [errorMessage])
  useEffect(() => {
    toast.success(successMessage)
  }, [successMessage])
  const route = pages.map((item, index) => {
    return (
      <Route
        key={index}
        path={item.path}
        render={(props) => <item.comp {...props} />}
        exact
      />
    )
  })
  return (
    <>
      <ToastContainer autoClose={2000} />
      <NavBar />
      <Switch>
        {route}
        <Redirect to="/404" />
      </Switch>
    </>
  )
}
const AppProvider = connect(
  (state) => {
    const { successMessage, errorMessage } = state.globalState
    return {
      successMessage,
      errorMessage,
    }
  },
  (dispatch) => {
    return {}
  }
)(App)
export default AppProvider
