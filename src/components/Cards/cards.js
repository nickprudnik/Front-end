import React from "react";
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';

class CardsCarousel extends React.Component {
    render() {
      return (
        <div className="carousel-cards">
        <h1 className="card-headline">Cheap flight offers**</h1>    
        <Carousel className="carousel-item-cards" indicators={false} controls={true}>
            <Carousel.Item className="carousel-item-cards">
                <CardGroup className="bscard-group">
                    <Card className="bscard">
                        <span class="flag-icon flag-icon-af"></span>
                        <Card.Img variant="top" src={require('./Images/riga.jpg')} />
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">Riga</Card.Title>
                            <Card.Text>
                                From Minsk $115
                            </Card.Text>
                            <Button className="card-buttons">BOOK NOW</Button>
                        </Card.Body>
                    </Card>
                    
                    <Card className="bscard">
                        <Card.Img className="img2" variant="top" src={require('./Images/Krakow2.jpg')} />
                        <Card.Body>
                            <Card.Title className="card-title">Warsaw</Card.Title>
                            <Card.Text>
                                From Kiev $125
                            </Card.Text>
                            <Button className="card-buttons">BOOK NOW</Button>
                        </Card.Body>
                    </Card>
                    <Card className="bscard">
                        <Card.Img variant="top" src={require('./Images/warsaw.jpg')} />
                        <Card.Body>
                            <Card.Title className="card-title">Vilnius</Card.Title>
                            <Card.Text>
                                From Moscow $150
                            </Card.Text>
                            <Button className="card-buttons" variant="primary">BOOK NOW</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item className="carousel-item-cards">
                <CardGroup>    
                    <Card className="bscard">
                        <Card.Img variant="top" src={require('./Images/BrandenburgerTor.jpg')} />
                        <Card.Body>
                            <Card.Title className="card-title">Kiev</Card.Title>
                            <Card.Text>
                                From Minsk $150
                            </Card.Text>
                            <Button className="card-buttons" variant="primary">BOOK NOW</Button>
                        </Card.Body>
                    </Card>
                    <Card className="bscard">
                        <Card.Img variant="top" src={require('./Images/Krakow.jpg')} />
                        <Card.Body>
                            <Card.Title className="card-title">Kiev</Card.Title>
                            <Card.Text>
                                From Tallinn $150
                            </Card.Text>
                            <Button className="card-buttons" variant="primary">BOOK NOW</Button>
                        </Card.Body>
                    </Card>
                    <Card className="bscard">
                        <Card.Img variant="top" src={require('./Images/losA.jpg')} />
                        <Card.Body>
                            <Card.Title className="card-title">Amsterdam</Card.Title>
                            <Card.Text>
                                From Warsaw $125
                            </Card.Text>
                            <Button className="card-buttons" variant="primary">BOOK NOW</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
        </div>  
       )
    }
}

export default CardsCarousel;