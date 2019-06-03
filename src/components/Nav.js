import React, { Component } from 'react';
import '../styles/Nav.css';

export default class NavBar extends Component {
    render() {
        if (this.props.loaded) {
            return (
                <nav className="navigation">
                    <div className="navigation--left">
                        <div>
                            The humidity in your area is {this.props.humidity}%.
                         </div>
                    </div>
                </nav>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}
