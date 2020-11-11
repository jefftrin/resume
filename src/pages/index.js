import React from "react"
import Navi from '../components/navbar'
import Layout from '../components/layout'
import Greeting from "../components/greeting"
import '../components/index.css'
import { Container, Tab, Row, Col, Nav, Carousel } from 'react-bootstrap'
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
import { FaServer, FaCloud, FaCode } from 'react-icons/fa'







export default function Home() {
  return (
    
    <div className="app">
    <Navi />
<Layout />

<Greeting />

<div className="highlights">
  <h1>Key Skills</h1>
  <p>Core competencies, but not limited to the following:</p>
</div>
<Container className="highlights section-two">
  <Row>
    <Col><FaServer />&nbsp; Expert Systems Administrator
    <hr></hr>
    <ul>
    <li>Windows Server Configuration, Maintenance, and Monitoring</li>
    <li>VMware, Hyper-V</li>
    <li>Fundamental Networking</li>
    <li>Data Security and User Access Controls</li>
    <li>Data Backup and Recovery</li>
    <li>Active Directory and Group Policies</li>
    <li>DNS, DHCP, and Other Essential Server Roles</li>
    <li>Office 365, Exchange</li>
    <li>SharePoint</li>
    <li>Desktop Support</li>
    </ul></Col>
    <Col><FaCloud />&nbsp; Entry Level AWS Solutions
    <hr></hr>
    <ul>
      <li>EC2 and Other Compute Solutions</li>
      <li>S3 and Other Storage Solutions</li>
      <li>Route53</li>
      <li>CloudFront</li>
      <li>Certificate Manager</li>
      <li>Load Balancers</li>
      <li>Machine Images</li>
    </ul>
    </Col>
    <Col><FaCode />&nbsp; Entry Level Web Developer
    <hr></hr>
    <li>HTML5</li>
    <li>CSS 3</li>
    <li>JavaScript ES6, JQuery</li>
    <li>Bootstrap</li>
    <li>Bash command Line</li>
    <li>Node,Expressjs, NPM</li>
    <li>Gatsby, React</li>
    <li>Visual Studio Code, Atom</li>
    <li>Git and Github</li>
    <li>Python, PyCharm</li>
    <li>SQL, MongoDB</li>
    <li>Security, Authentication</li>
    <li>OAuth with Google and Facebook</li>
    <li>API, RESTful API</li>

    
    </Col>
  </Row>
</Container>


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
