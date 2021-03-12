import React, { Component } from 'react'
import './App.css'
import ToDo from './components/pages/ToDo'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import NavBar from './components/NavBar'
import { Switch, Route, Redirect } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <ToDo />
          </Route>
          <Route path="/About" exact>
            <About />
          </Route>
          <Route path="/Contact" exact>
            <Contact />
          </Route>
         <Redirect to="/" />
        </Switch>
      </>
    )
  }
}

export default App
