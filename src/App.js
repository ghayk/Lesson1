import React, { Component } from 'react'
import './App.css'
import ToDo from './components/pages/ToDo'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import NavBar from './components/NavBar'
import SingleTask from './components/pages/SingleTask'
import ERR_404 from './components/pages/ERR_404'
import { Switch, Route, Redirect } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route path="/" component={ToDo} exact />
          <Route path="/About" component={About} exact />
          <Route path="/Contact" component={Contact} exact />         
          <Route path="/task/:id" component={SingleTask} exact />
          <Route path="/404" component={ERR_404} exact />
          <Redirect to="/404" />
        </Switch>
      </>
    )
  }
}

export default App
