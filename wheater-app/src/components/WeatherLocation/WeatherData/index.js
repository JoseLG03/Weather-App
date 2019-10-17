import React from 'react';
import WheatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherData =({data:{temperature, weatherState, humidity, wind}}) =>{
    return(
    <div className="weatherDataCont">
        <WheatherTemperature 
            temperature={temperature} 
            weatherState={weatherState} 
        />
        <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>);
};

WeatherData.propTypes={
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default WeatherData;