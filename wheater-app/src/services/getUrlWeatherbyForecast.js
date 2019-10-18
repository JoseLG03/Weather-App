import {url_base_weather, api_key} from './../constants/api_url';

const getUrlWeatherbyForecast= city=>{    
    return `${url_base_weather}?q=${this.props.city}&appid=${api_key}`;
};

export default getUrlWeatherbyForecast;