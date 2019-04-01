import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import { newsFetchData } from "../../redux/search/news/actions";

class ControlledCarousel extends React.Component {
  static propTypes = {
    news: PropTypes.array.isRequired,
    newsFetchData: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  componentDidMount() {
    this.props.newsFetchData("/latest_news");
  }

  render() {
    const { index, direction } = this.state;
    const { news } = this.props;
    return (
      <Carousel
        className="carousel"
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        controls={false}
      >
        {news.map(item => {
          return (
            <Carousel.Item key={item.id} className="carousel-item">
              <img
                className="d-block w-100"
                src={item.image}
                alt="First slide"
              />
              <Carousel.Caption className="carousel-caption">
                <h2>{item.new1}</h2>
                <p>
                  {item.about}
                  <span className="emodji" role="img">
                    🕺
                  </span>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

const mapStateToProps = state => ({
  news: state.searchPage.news.items
});

const mapDispatchToProps = dispatch => ({
  newsFetchData: values => dispatch(newsFetchData(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlledCarousel);
