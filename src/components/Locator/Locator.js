import React, { Component } from 'react';
import Nav from '../../components/Nav.js';
import axios from 'axios';

export default class Locator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 90,
            longitude: 30,
            humidity: 0,
        }
    }

    // TODO: add google API for geolocation
    fetchData = () => {
        axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=ab1fcdbee534c8cfce19f3c1ff919a6d`
        )
            .then(res => {
                this.setState({ humidity: `${res.data.main.humidity}%`});
            }).catch(err =>
                console.log(err)
            );
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <Nav humidity={this.state.humidity}></Nav>
        )
    }
}