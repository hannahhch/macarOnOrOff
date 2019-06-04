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
                <div>
                    <div className="loader-wrapper">
                        <div className="loader">
                            <img className="loader-item" src={MacaronBlue} alt="" />
                            <img className="loader-item" src={MacaronPink} alt="" />
                            <img className="loader-item" src={MacaronGreen} alt="" />
                            <img className="loader-item" src={MacaronPurple} alt="" />
                        </div>
                        <h1 className="loader-title">checking weather conditions...</h1>
                    </div>
                </div>
                
            )
        }
    }
}