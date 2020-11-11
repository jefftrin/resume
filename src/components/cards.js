import React from 'react'
import './cards.css'
import { FaCode , FaServer, FaCloud} from 'react-icons/fa';
import { Container, Row, Col, Card, CardDeck, Button } from 'react-bootstrap'







function Greeting() {
    return (

        <div className="cards-container">
        <Container>
            <Row>
                <Col className="cards-columns">
                <CardDeck>
                    <Card className="cards">
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                        <Card.Title><h4>Systems Administration</h4></Card.Title>
                        <Card.Text>
                        When rapper 50 cent had five songs on the Billboard charts in 2005, I was starting my IT career. My bread and butter is being part of a team to assist small to large businesses with their IT infrastructure by administering essential operational elements such as software, server components, network components, and data protection.
                        </Card.Text>
                        
                        </Card.Body>
                        <Card.Footer>
                        <Button className="btns" variant="primary" size="lg" href="/sysadmin/"><FaServer />&nbsp; Read more</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="cards">
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                        <Card.Title><h4>AWS Cloud Solutions</h4></Card.Title>
                        <Card.Text>
                        October 2020: I wanted to learn cloud computing, so I did. I have completed a hands-on 7 hour online course that focused on specific Amazon Web Services concepts and technologies. I learnt how to build high-performance, cost-optimized, resilient, and operationally efficient AWS
architectures.{' '}
                        </Card.Text>
                        
                        </Card.Body>
                        <Card.Footer>
                        <Button className="btns" variant="warning" size="lg" href="/cloud/"><FaCloud />&nbsp; Read more</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="cards">
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                        <Card.Title><h4>Web Development</h4></Card.Title>
                        <Card.Text>
                        November 2020: I didn't really appreciate the work coders do, until I became one. I just completed a grueling and comprehensive 54 hour online Web Development Bootcamp. The code- along course covered a massive amount of tools and technologies of the front-end and back-end stack to get started on building web applications.
                        </Card.Text>
                        
                        </Card.Body>
                        <Card.Footer>
                        <Button className="btns" variant="dark" size="lg" href="/webdev/"><FaCode />&nbsp; Read more</Button>
                        </Card.Footer>
                    </Card>
                    </CardDeck>
                </Col>      
            </Row>
        </Container>
        </div>
    )
}

export default Greeting
