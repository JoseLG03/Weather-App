import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ForecastExtended from './../components/WeatherLocation/ForecastExtended';


class ForecastExtendContainer extends Component {
    render() {
        return (
            this.props.city &&
            <ForecastExtended city={this.props.city} />
        );
    }
}

ForecastExtendContainer.propTypes = {
    city:PropTypes.string.isRequired,
};

const mapStateToProps= ({city}) =>({city});

export default connect(mapStateToProps, null)(ForecastExtendContainer);