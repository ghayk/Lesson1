import React from 'react'
import './App.css'
import ToDo from './components/pages/ToDo'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import NavBar from './components/NavBar'
import SingleTask from './components/pages/SingleTask'
import ERR_404 from './components/pages/ERR_404'
import { Switch, Route, Redirect } from 'react-router-dom'

const pages = [
  { path: '/', comp: ToDo },
  { path: '/About', comp: About },
  { path: '/Contact', comp: Contact },
  { path: '/task/:id', comp: SingleTask },
  { path: '/404', comp: ERR_404 },
]

function App() {
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
      <NavBar />
      <Switch>
        {route}
        <Redirect to="/404" />
      </Switch>
    </>
  )
}

export default App
