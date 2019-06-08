//jshint esversion:6
import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../tourData';

export default class TourList extends Component {
    state = {
        tours: tourData
    };
    removeTour = id => {
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !==id);
        this.setState({
            tours:sortedTours
        });
    };
    render() {
        const {tours} = this.state;

        return (
            <section className="tourlist">
                {tours.map(tourArray => {
                    return(
                        <Tour key={tourArray.id} tourArray={tourArray} removeTour={this.removeTour}/>
                    )
                })}
            </section>
        );
    }
}
