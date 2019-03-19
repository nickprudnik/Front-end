import React, { Component } from 'react';
import ControlledCarousel from '../components/Carousel/slider';
import Search from '../components/search/index';
import CardsCarousel from '../components/Cards/cards'

import '../reset.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <ControlledCarousel />
                <Search />
                <CardsCarousel />
            </div>    
        );
    }
}