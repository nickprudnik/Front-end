import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import BestDeals from "../../components/Best-deals/bestDeals";
import { bestdealsFetchData } from "../../redux/search/bestDeals/actions";

class CardsCarousel extends React.Component {
  static propTypes = {
    bestdealsFetchData: PropTypes.func.isRequired,
    bestdeals: PropTypes.array.isRequired
  };
  constructor() {
    super();
    this.state = {
      showBestDeals: false
    };
  }

  onClickPlaneSeatsBooking(e, values) {
    e.preventDefault();
    this.setState({ showBestDeals: !this.state.showBestDeals });
    this.props.bestdealsFetchData("/search_bestdeals", values);
  }

  render() {
    return (
      <div className="carousel-cards">
        <h1 className="card-headline">Cheap flight offers**</h1>
        <Carousel
          className="carousel-item-cards"
          indicators={false}
          controls={true}
        >
          <Carousel.Item className="carousel-item-cards">
            <CardGroup className="bscard-group">
              <Card className="bscard">
                <span className="flag-icon flag-icon-af" />
                <Card.Img variant="top" src={require("./Images/riga.jpg")} />
                <Card.Body className="card-body">
                  <Card.Title className="card-title">Riga</Card.Title>
                  <Card.Text>From Minsk $ 70</Card.Text>
                  <Button
                    className="card-buttons"
                    onClick={this.onClickPlaneSeatsBooking.bind(this)}
                  >
                    BOOK NOW
                  </Button>
                </Card.Body>
              </Card>

              <Card className="bscard">
                <Card.Img
                  className="img2"
                  variant="top"
                  src={require("./Images/Krakow2.jpg")}
                />
                <Card.Body>
                  <Card.Title className="card-title">Warsaw</Card.Title>
                  <Card.Text>From Kiev $ 60</Card.Text>
                  <Button
                    className="card-buttons"
                    onClick={this.onClickPlaneSeatsBooking.bind(this)}
                  >
                    BOOK NOW
                  </Button>
                </Card.Body>
              </Card>
              <Card className="bscard">
                <Card.Img variant="top" src={require("./Images/warsaw.jpg")} />
                <Card.Body>
                  <Card.Title className="card-title">Vilnius</Card.Title>
                  <Card.Text>From Moscow $ 65</Card.Text>
                  <Button
                    className="card-buttons"
                    variant="primary"
                    onClick={this.onClickPlaneSeatsBooking.bind(this)}
                  >
                    BOOK NOW
                  </Button>
                </Card.Body>
              </Card>
            </CardGroup>
          </Carousel.Item>
          <Carousel.Item className="carousel-item-cards">
            <CardGroup>
              <Card className="bscard">
                <Card.Img
                  variant="top"
                  src={require("./Images/BrandenburgerTor.jpg")}
                />
                <Card.Body>
                  <Card.Title className="card-title">Kiev</Card.Title>
                  <Card.Text>From Minsk $ 65</Card.Text>
                  <Button
                    className="card-buttons"
                    variant="primary"
                    onClick={this.onClickPlaneSeatsBooking.bind(this)}
                  >
                    BOOK NOW
                  </Button>
                </Card.Body>
              </Card>
              <Card className="bscard">
                <Card.Img variant="top" src={require("./Images/Krakow.jpg")} />
                <Card.Body>
                  <Card.Title className="card-title">Tallinn</Card.Title>
                  <Card.Text>From Kiev $ 35</Card.Text>
                  <Button
                    className="card-buttons"
                    variant="primary"
                    onClick={this.onClickPlaneSeatsBooking.bind(this)}
                  >
                    BOOK NOW
                  </Button>
                </Card.Body>
              </Card>
              <Card className="bscard">
                <Card.Img variant="top" src={require("./Images/losA.jpg")} />
                <Card.Body>
                  <Card.Title className="card-title">Amsterdam</Card.Title>
                  <Card.Text>From Warsaw $ 40</Card.Text>
                  <Button
                    className="card-buttons"
                    variant="primary"
                    onClick={this.onClickPlaneSeatsBooking.bind(this)}
                  >
                    BOOK NOW
                  </Button>
                </Card.Body>
              </Card>
            </CardGroup>
          </Carousel.Item>
        </Carousel>
        {this.state.showBestDeals && <BestDeals />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bestdeals: state.searchPage.bestDeals.items,
  bestdealsHasErrored: state.searchPage.bestDeals.hasErrored,
  bestdealsIsLoading: state.searchPage.bestDeals.isLoading
});

const mapDispatchToProps = dispatch => ({
  bestdealsFetchData: (url, values) => dispatch(bestdealsFetchData(url, values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsCarousel);
