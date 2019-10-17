import React, {Component} from 'react';
import ForecastItem from './../ForecastItem/index';
import PropTypes from 'prop-types';
import './styles.css';

const days=[
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];

const data={
    temperature:10,
    humidity:15,
    weatherState:'SUN',
    wind:'29',
};

class ForecastExtended extends Component{

    renderForecastItemDays(){
        return days.map( day =>(
        <ForecastItem weekday={day} hour={10} data={data}></ForecastItem>)
        );        
    }

    render(){
        const {city}=this.props;
        return (
        <div>
            <h2 className='forecast-tittle'>
                Pronóstico para {city}
            </h2>
            {this.renderForecastItemDays()}            
        </div>
        );
    }
}

ForecastExtended.propTypes={
    city:PropTypes.string.isRequired,
}

export default ForecastExtended;