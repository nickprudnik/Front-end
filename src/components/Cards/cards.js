import React from "react";
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';

class CardsCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
    }
  
    render() {
      return (
        <Carousel className="carousel-cards">
            <Carousel.Item className="carousel-item-cards">
                <CardGroup>
                    <Card className="bscard">
                        <Card.Img variant="top" src={require('./Images/riga.jpg')} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className="bscard">
                        <Card.Img variant="top" src={require('./Images/Krakow2.jpg')} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className="bscard">
                        <Card.Img variant="top" src={require('./Images/warsaw.jpg')} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item className="carousel-item-cards">
                <CardGroup>    
                    <Card className="bscard">
                        <Card.Img variant="top" src={require('./Images/BrandenburgerTor.jpg')} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className="bscard">
                        <Card.Img variant="top" src={require('./Images/Krakow.jpg')} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className="bscard">
                        <Card.Img variant="top" src={require('./Images/losA.jpg')} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item className="carousel-item-cards">
                <CardGroup>  
                    <Card className="bscard">
                        <Card.Img variant="top" src={require('./Images/valencia.jpg')} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className="bscard">
                        <Card.Img variant="top" src={require('./Images/ValenciaSpain.jpg')} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className="bscard">
                        <Card.Img variant="top" src={require('./Images/venesia.jpg')} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>  
            </Carousel.Item>
        </Carousel>
       )
    }
}

export default CardsCarousel;