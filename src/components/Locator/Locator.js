import React, { Component } from 'react';
import Nav from '../../components/Nav.js';
import axios from 'axios';

export default class Locator extends Component {
    state = {
        latitude: 0,
        longitude: 0,
        humidity: 0,
        loaded: false,
    }

    fetchData = () => {
        axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=ab1fcdbee534c8cfce19f3c1ff919a6d`
        )
        .then(res => {
            console.log(res.data);
            this.setState({ 
                humidity: `${res.data.main.humidity}%`,
                loaded: true,
            });
        }).catch(err =>
            console.log(err)
        );
    }

    // TODO: create a use pop up 
    getUserLocation = () => {
        let currentComponent = this; // bind this to set state on it I guess?
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&key=AIzaSyDS2OxQRlDKCCzlvE-_W3aCMEh8fq665rc"
                )
                    .then(res => {
                        currentComponent.setState({
                            latitude: res.data.results[0].geometry.location.lng,
                            longitude: res.data.results[0].geometry.location.lat,
                        });
                    })
            });
        }
    }

    componentDidMount() {
        this.getUserLocation();
    }

    componentDidUpdate(_prevProps, prevState) {
        if ((this.state.latitude !== prevState.latitude) || (this.state.longitude !== prevState.longitude)){
            this.fetchData();
        }
    }

    render() {
        return (
            <Nav humidity={this.state.humidity} loaded={this.state.loaded}></Nav>
        )
    }
}