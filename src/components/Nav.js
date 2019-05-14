import React, { Component } from 'react';
import '../styles/Nav.css';

export default class NavBar extends Component {
    render() {
        return (
           <nav className="navigation">
              <div className="navigation--left">
                <div>
                    The humidity in ___ is {this.props.humidity}.
                </div>
              </div>
           </nav>
        );

        
    }
}
