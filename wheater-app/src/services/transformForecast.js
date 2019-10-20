import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './../services/transformWeather';

const transformForecast=data=>(
    data.list.filter(item =>{
        const hour=moment.utc(moment.unix(item.dt)).hour();
        return (
            hour===6 ||
            hour===12 ||
            hour===18
        );
    }).map(item=>(
        {
           weekDay:moment.unix(item.dt).format('ddd'),
           hour:moment.unix(item.dt).hour(),
           data:transformWeather(item) 
        }
    ))
    ); 

export default transformForecast;