import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData/index';

const ForecastItem = ({weekday, hour, data}) => (
    <div>
        <div>{weekday} Hora:{hour}</div>
        <WeatherData data={data}></WeatherData>
    </div>
);

ForecastItem.propTypes={
    weekday:PropTypes.string.isRequired,
    hour:PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default ForecastItem;