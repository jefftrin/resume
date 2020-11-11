import React from "react"
import './layout.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import { Navbar, Nav } from 'react-bootstrap'
import { BiUser } from 'react-icons/bi'



export default function Navi () {
  return (


<Navbar fixed="top" bg="light" variant="light" expand="lg">
  <Navbar.Brand className="navbar-brand" href="#home"><BiUser />&nbsp; Jeff Trin</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="#home">Contact</Nav.Link>
      <Nav.Link href="#work-history">Work History</Nav.Link>
      <Nav.Link href="#certs">Certifications</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>



  )
}