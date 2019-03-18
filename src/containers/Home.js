import React, { Component } from 'react';
import CarouselSlides from '../components/Carousel/slider';
import Search from '../components/search/index';

import '../reset.scss';
// import './index.scss';

export default class Home extends Component {
    render() {
        return (
            <div>
                <CarouselSlides />
                <Search />
            </div>    
        );
    }
}