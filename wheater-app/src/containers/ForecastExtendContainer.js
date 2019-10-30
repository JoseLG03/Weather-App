import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ForecastExtended from './../components/WeatherLocation/ForecastExtended';


class ForecastExtendContainer extends Component {
    render() {
        const {city, forecastData}=this.props;
        return (
            city &&
            <ForecastExtended city={city} forecastData={forecastData}/>
        );
    }
}

ForecastExtendContainer.propTypes = {
    city:PropTypes.string.isRequired,
    forecastData:PropTypes.array.isRequired,
};

const mapStateToProps= ({city,cities}) =>({city, forecastData:cities[city] && cities[city].forecastData});

export default connect(mapStateToProps, null)(ForecastExtendContainer);