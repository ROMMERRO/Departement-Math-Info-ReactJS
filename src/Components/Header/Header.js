import React, { Component } from 'react'
import '../../bootstrap/css/bootstrap.min.css'
import './Navbar.css'
import logo from './dark.png'
import Navbar from './Navbar'


class Header extends Component {



  render(){
    return(

        <div className="navbar_container">
            <div className="cover"><img src={logo} alt="logo"/></div>
            <Navbar chooseFlr={(flr) => this.props.chooseFlr(flr)}/>
        </div>

    );
  }
}

export default Header;