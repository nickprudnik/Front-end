import React from "react";
import Carousel from 'react-bootstrap/Carousel';

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel className="carousel"
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        controls={false}
      >
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={require('./Images/MINSK2.png')}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h2>Minsk</h2>
            <p>Start yout travel from here <h3>🕺</h3></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={require('./Images/PASSPORT.jpg')}
            alt="Third slide"
          />

          <Carousel.Caption className="carousel-caption">
            <h3>Brexit</h3>
            <p>New travel regulations for UK passport holders</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={require('./Images/LUGGAGE.png')}
            alt="Third slide"
          />

          <Carousel.Caption className="carousel-caption">
            <h3>Your luggage</h3>
            <p>New rules from 03/25/2019</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}


export default ControlledCarousel;