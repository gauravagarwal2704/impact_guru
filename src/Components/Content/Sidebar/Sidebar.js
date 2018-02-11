import React, { Component } from 'react';
import Donations from './Donations';
// import './Header.css';

class Sidebar extends Component {


  render() {
    return (
        <div>
        	<Donations donation_props ={this.props.sidebar} />
        </div>
    );
  }
}

export default Sidebar;
