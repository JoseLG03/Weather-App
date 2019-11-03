import {combineReducers} from 'redux';
import {createSelector} from 'reselect';
import {cities, 
    getWeathercities as _getWeathercities,getForecastDataFromCities as _getForecastDataFromCities} from './cities';
import {city} from './city';

export default combineReducers({
    cities,
    city
});

export const getCity = createSelector(state =>state.city, city => city);

export const getForecastDataFromCities= createSelector(state => state.cities, getCity, _getForecastDataFromCities);

export const getWeathercities = createSelector(state => state.cities, _getWeathercities);