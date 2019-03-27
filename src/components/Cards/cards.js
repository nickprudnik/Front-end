import React from "react";
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import BestDeals from '../../components/Best-deals/bestDeals';
import { connect } from 'react-redux';
import { ticketsFetchData } from '../../redux/search/tickets/actions';
import PropTypes from 'prop-types';

class CardsCarousel extends React.Component {
    static propTypes = {
        ticketsFetchData: PropTypes.func.isRequired,
        tickets: PropTypes.array.isRequired,
  };
    constructor() {
        super();
        this.state = {
            showBestDeals: false
        }
    }

    onClick(e, value) {
        e.preventDefault();
        this.setState({showBestDeals: !this.state.showBestDeals});
        this.props.ticketsFetchData('/tickets', value);
        return this.props.tickets;
    }

    render() {
      return (
        <div className="carousel-cards">
        <h1 className="card-headline">Cheap flight offers**</h1>    
        <Carousel className="carousel-item-cards" indicators={false} controls={true}>
            <Carousel.Item className="carousel-item-cards">
                <CardGroup className="bscard-group">
                    <Card className="bscard">
                        <span className="flag-icon flag-icon-af"></span>
                        <Card.Img variant="top" src={require('./Images/riga.jpg')} />
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">Riga</Card.Title>
                            <Card.Text>
                                From Minsk $ 70
                            </Card.Text>
                            <Button className="card-buttons" onClick={this.onClick.bind(this)}>BOOK NOW</Button>
                            
                        </Card.Body>
                    </Card>
                    
                    <Card className="bscard">
                        <Card.Img className="img2" variant="top" src={require('./Images/Krakow2.jpg')} />
                        <Card.Body>
                            <Card.Title className="card-title">Warsaw</Card.Title>
                            <Card.Text>
                                From Kiev $ 60
                            </Card.Text>
                            <Button className="card-buttons" onClick={this.onClick.bind(this)}>BOOK NOW</Button>
                            
                        </Card.Body>
                    </Card>
                    <Card className="bscard">
                        <Card.Img variant="top" src={require('./Images/warsaw.jpg')} />
                        <Card.Body>
                            <Card.Title className="card-title">Vilnius</Card.Title>
                            <Card.Text>
                                From Moscow $ 65
                            </Card.Text>
                            <Button className="card-buttons" variant="primary" onClick={this.onClick.bind(this)}>BOOK NOW</Button>
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
                                From Minsk $ 65
                            </Card.Text>
                            <Button className="card-buttons" variant="primary" onClick={this.onClick.bind(this)}>BOOK NOW</Button>
                        </Card.Body>
                    </Card>
                    <Card className="bscard">
                        <Card.Img variant="top" src={require('./Images/Krakow.jpg')} />
                        <Card.Body>
                            <Card.Title className="card-title">Kiev</Card.Title>
                            <Card.Text>
                                From Tallinn $ 35
                            </Card.Text>
                            <Button className="card-buttons" variant="primary" onClick={this.onClick.bind(this)}>BOOK NOW</Button>
                        </Card.Body>
                    </Card>
                    <Card className="bscard">
                        <Card.Img variant="top" src={require('./Images/losA.jpg')} />
                        <Card.Body>
                            <Card.Title className="card-title">Amsterdam</Card.Title>
                            <Card.Text>
                                From Warsaw $ 40
                            </Card.Text>
                            <Button className="card-buttons" variant="primary" onClick={this.onClick.bind(this)}>BOOK NOW</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
        {this.state.showBestDeals && <BestDeals />}
        </div>  
       )
    }
}

const mapStateToProps = state => ({
    tickets: state.searchPage.tickets.items,
})

const mapDispatchToProps = dispatch => ({
    ticketsFetchData: (url, values) => dispatch(ticketsFetchData(url, values)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(CardsCarousel);