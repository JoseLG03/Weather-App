import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {createStore} from 'redux';
import LocationList from './components/LocationList';
import ForecastExtened from './components/WeatherLocation/ForecastExtended'
import {setCity} from './actions/index';

import './App.css';

const cities=[
  'Buenos Aires, ar',
  'Ciudad de México, mx',
  'Washington, us',
  'Bogota, co',
  'Lima, pe',
  'Madrid, es'
];

const store=createStore(()=>{}, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component{

  constructor(){
    super();
    this.state={city:null};
  }

  handleSelectedLocation= city =>{
    this.setState({city:city});
    console.log(`handleSelectedLocation ${city}`);

    store.dispatch(setCity(city));
  }

  render(){
    const {city}=this.state;
    return(
        <Grid>
            <Row>
              <AppBar position='sticky'>
                <Toolbar>
                  <Typography color='inherit'>
                    Weather App  
                  </Typography>
                </Toolbar>
              </AppBar>
            </Row>
            <Row>
              <Col  xs={12} md={6}>
                <LocationList cities={cities}
                  onSelectedLocation={this.handleSelectedLocation}>
                </LocationList>
              </Col>
              <Col xs={12} md={6}>
                <Paper elevation={4}>
                  <div className="details">
                    {
                      city?
                        <ForecastExtened city={city}></ForecastExtened>:
                        <h1>No a seleccionado Ciudad</h1>
                    }
                  </div>
                </Paper>
              </Col>
            </Row>        
        </Grid>
    );
  }
}
export default App;
