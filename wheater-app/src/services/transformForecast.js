import moment from 'moment';

const transformForecast=data=>(
    data.list.filter(item =>{
        const hour=moment.utc(moment.unix(item.dt)).hour();
        return (
            hour===6 ||
            hour===12 ||
            hour===18
        );
    })); 

export default transformForecast;