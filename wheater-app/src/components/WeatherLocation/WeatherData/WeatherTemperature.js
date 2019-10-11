import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE, 
} from '../../../constants/weathers';
import './styles.css';

const icons={
    [CLOUD]:"cloud",
    [SUN]:"day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [THUNDER]:"day-thunderstore",
    [DRIZZLE]:"day-showers",
};

const getWeatherIcon= weatherState =>{
    const icon= icons[weatherState];

    const sizeicon="4x";

    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeicon}/>
    else
        return <WeatherIcons className="wicon" name="day-fog" size={sizeicon}/>    
};

const WheaterTemperature =({temperature,weatherState}) =>(
    <div className="weatherTempCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{` ${temperature}`}</span>
        <span className="temperatureType">{` Cº `}</span>
    </div>
);

WheaterTemperature.propTypes={
    temperature:PropTypes.number.isRequired,
    weatherState:PropTypes.string.isRequired,
};
export default WheaterTemperature;