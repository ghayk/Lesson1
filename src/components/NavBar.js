import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <h1 style={{color:'#0af'}}>ToDo List</h1>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar mr-auto ">
          <NavLink activeStyle={{ color: '#078' }} to="/" exact>
            Home
          </NavLink>
          <NavLink activeStyle={{ color: '#078' }} to="/About" exact>
            About
          </NavLink>
          <NavLink activeStyle={{ color: '#078' }} to="/Contact" exact>
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
