import React, { Component } from "react";
import ControlledCarousel from "../components/Carousel/slider";
import Search from "../components/search/index";
import CardsCarousel from "../components/Cards/cards";
import FlightsList from "../components/flights-list";
import WidgetBot from "../components/widget-Bot/widgetBot";

import "../reset.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Home extends Component {
  render() {
    return (
      <div className="main-page content">
        <ControlledCarousel />
        <Search />
        <FlightsList />
        <CardsCarousel />
        <WidgetBot />
      </div>
    );
  }
}
