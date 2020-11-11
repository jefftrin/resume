import React from "react"
import './layout.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { BiUser } from 'react-icons/bi'



export default function Navi () {
  return (


<Navbar fixed="top" bg="light" variant="light" expand="lg">
  <Navbar.Brand className="navbar-brand" href="#home"><BiUser />&nbsp; Jeff Trin</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#work-history">Work History</Nav.Link>
      <Nav.Link href="#certs">Certifications</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>



  )
}