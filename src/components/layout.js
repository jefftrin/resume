import React from "react"
import './layout.css'
import { Button } from 'react-bootstrap'
import { FaCode, FaServer, FaCloud } from 'react-icons/fa';




export default function Layout() {
  return (


<div className="hero-container">

<div class="custom-shape-divider-bottom-1604905474">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    
    <h1>Hello World!</h1>
    <p>Welcome to my website</p>
    <div className="hero-btns">
    <Button className="btns" variant="light" size="lg"><FaCode />&nbsp; WebDev</Button>
    <Button className="btns" variant="primary" size="lg"><FaServer />&nbsp; SysAdmin</Button>
    <Button className="btns" variant="warning" size="lg"><FaCloud />&nbsp; AWS Cloud</Button>
    </div>


</div>


  )
}