import React, { Component } from 'react';
import Nav from '../../components/Nav.js';
import Mac from '../../components/Mac.js';
import axios from 'axios';
import '../../styles/Locator.css';

export default class Locator extends Component {
    
    state = {
        latitude: 0,
        longitude: 0,
        humidity: 0,
        loaded: false,
        locationAllowed: false,
        locationDenied: true,
    }


    // TODO: remove CORS
    fetchData = () => {
        axios.get(
            `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ef19575d315355909bb8cfc27f353e77/${this.state.latitude},${this.state.longitude}`
        )
        .then(res => {
            console.log(res);
            this.setState({ 
                humidity: (res.data.currently.humidity) * 100,
                loaded: false,
            });
        }).catch(err =>
            console.log(err)
        );
    }

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

    locationAllowed = () => {
        this.setState({ locationAllowed: true });
           }

    locationNotAllowed = () => {
        this.setState({ locationAllowed: false });
    }

    render() {
        if (this.state.locationAllowed) {
            return (
                <div>
                    <Nav humidity={this.state.humidity} loaded={this.state.loaded}></Nav>
                    <Mac humidity={this.state.humidity} loaded={this.state.loaded}></Mac>
                </div>
            )
        } else {
            return (
                <div className="modal-wrapper">
                    <div className="modal-wrapper--interior">
                        <h1 className="modal-title">Allow "Macaron Macaroff" to access your location while you are using the app?</h1>
                        <button onClick={this.locationNotAllowed} className="button button--no">Don't Allow</button>
                        <button onClick={this.locationAllowed}  className="button button--yes">Allow</button>
                    </div>
                </div>
            )
        }
    }
}