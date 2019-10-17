import React, {Component} from 'react';
import ForecastItem from './../ForecastItem/index';
import PropTypes from 'prop-types';
import './styles.css';

class ForecastExtended extends Component{
    render(){
        const {city}=this.props;
        return (
        <div>
            <h2 className='forecast-tittle'>
                Pronóstico para {city}
            </h2>
            <ForecastItem></ForecastItem>
        </div>
        );
    }
}

ForecastExtended.propTypes={
    city:PropTypes.string.isRequired,
}

export default ForecastExtended;