import React from "react"
import Navi from '../components/navbar'
import Layout from '../components/layout'
import Greeting from "../components/greeting"
import Cards from "../components/cards"
import '../components/index.css'
import { Tab, Row, Col, Nav, Carousel } from 'react-bootstrap'
import Slide1 from '../components/slideone'
import Slide2 from '../components/slidetwo'
import Slide3 from '../components/slidethree'
import Slide4 from '../components/slidefour'
import Slide5 from '../components/slidefive'
import Tasc from '../components/tabs'
import Sangart from '../components/tabstwo'
import Everi from '../components/tabsthree'
import Agilitec from '../components/tabsfour'
import Contractor from '../components/tabsfive'





export default function Home() {
  return (
    
    <div className="app">
    <Navi />
<Layout />

<Greeting />
<Cards />

<div id="work-history" className="section-two">
  <h1><span>15 years</span> in the industry</h1>
  <p>I think being a gamer as a kid really nourished my passion to work and grow my career in the technology field. Seeing positive results to achieve goals is my driving force. Knowing what it takes to work hard and persevere to achieve those goals is the wisdom I've gained throughout my career. My experience and personality will complement an IT team of any size, from small to enterprise environments.</p>
</div>

<div className="section-two">
  <h1>My Work History</h1>
  <p>Click the year ranges below to view work history details.</p>
</div>

<div className="tabs">
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">2005 - 2008</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">2008 - 2014</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">2014 - 2015</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">2015 - 2017</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fifth">2017 - 2020</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <Tasc />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Sangart />
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <Everi />
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
          <Agilitec />
        </Tab.Pane>
        <Tab.Pane eventKey="fifth">
          <Contractor />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</div>


<div id="certs" className="section-two">
  <h1>Certifications and Education</h1>
  <h5>Microsoft Certified Professional ID: 6134398</h5>
  <br></br>
  <p>Microsoft Exams Passed</p>
  <ul>
    <li>98-365 MTA Windows Server Administration Fundamentals</li>
    <li>98-367 MTA Security Fundamentals</li>
    <li>98-349 MTA Windows Operating System Fundaments</li>
  </ul>
  <br></br>
  <p>2020 AWS Certified Solutions Architect Associate Course</p>
  <ul>
    <li>Course Duration: 7 hours</li>
  </ul>
  <br></br>
  <p>2020 Web Development Bootcamp</p>
  <ul>
    <li>Course Duration: 54 hours</li>
  </ul>
</div>

<div className="carousel-container">
<Carousel pause='hover'>
  <Carousel.Item interval={5000}>
    <Slide1 />
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <Slide2 />
  </Carousel.Item>
  <Carousel.Item interval={5000}>
  <Slide3 />
  </Carousel.Item>
  <Carousel.Item interval={5000}>
  <Slide4 />
  </Carousel.Item>
  <Carousel.Item interval={5000}>
  <Slide5 />
  </Carousel.Item>
</Carousel>
</div>


<div className="footer">
  <h3>This is a footer.</h3>
</div>

    </div>
    
    
  )
}
