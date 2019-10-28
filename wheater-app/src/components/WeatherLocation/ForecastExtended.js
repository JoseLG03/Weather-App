import React, {Component} from 'react';
import ForecastItem from './../ForecastItem/index';
import PropTypes from 'prop-types';
import transformForecast from './../../services/transformForecast';
import './styles.css';

const api_key="47a729d9bd277c6be12ebace47236bee";
const url="http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component{
    constructor(){
        super();
        this.state={forecastData:null}
    }

    componentDidMount(){
        //fetch or axios
        this.updateCity(this.props.city);
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.city !==this.props.city){
            this.setState({forecastData:null});
            this.updateCity(nextProps.city);
        }
    }

    updateCity=city =>{
        const url_forecast=`${url}?q=${city}&appid=${api_key}`;
        
        fetch(url_forecast).then(
            data=>(data.json())
        ).then(
            weather_data=>{
                console.log(weather_data);
                const forecastData=transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData});
            }
        );
    }

    renderForecastItemDays(forecastData){
        return forecastData.map( forecast =>(
        <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekday={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}>
        </ForecastItem>));        
    }

    renderProgress=()=>{
        return <h3>Cargando Pronóstico Extendido...</h3>;
    }

    render(){
        const {city}=this.props;
        const {forecastData}=this.state;
        return (
        <div>
            <h2 className='forecast-tittle'>
                Pronóstico para {city}
            </h2>
            {forecastData ? 
                this.renderForecastItemDays(forecastData):
                this.renderProgress()
            }                
        </div>
        );
    }
}

ForecastExtended.propTypes={
    city:PropTypes.string.isRequired,
}

export default ForecastExtended;