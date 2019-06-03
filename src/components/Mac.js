import React, { Component } from 'react';
import '../styles/Mac.css';
import MacaronBlue from '../images/macaron-blue.svg';
import MacaronPink from '../images/macaron-pink.svg';
import MacaronGreen from '../images/macaron-green.svg';
import MacaronPurple from '../images/macaron-purple.svg';


export default class Mac extends Component {
    render() {
        const humidityThreshold = 50;
        if (this.props.loaded) {
            if (humidityThreshold >= this.props.humidity) {
                return (
                    <div>macaron</div>
                )
            } else {
                return (
                    <div>off</div>
                )
            }
        } else {
            return (
                <div className="loader-wrapper">
                    <img class="macaron-loader" src={ MacaronBlue } alt=""/>
                    <img class="macaron-loader" src={ MacaronPink } alt="" />
                    <img class="macaron-loader" src={ MacaronGreen } alt="" />
                    <img class="macaron-loader" src={ MacaronPurple } alt="" />

                    {/* <div className="loader"></div>  */}
                </div>
            )
        }
    }
}