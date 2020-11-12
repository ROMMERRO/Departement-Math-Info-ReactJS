import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import '../../bootstrap/css/bootstrap.min.css'
import './nav.css'
import logo from './dark.png'
import '../../fontawesome/css/all.min.css'
import $ from 'jquery';


class Navbar extends Component {


  componentDidMount()
  {

  /*----------fix the navbar after scroll----------*/
    // Get the navbar
    const 
      navbar = document.getElementById("navbar"),
      nav = document.getElementsByClassName("parentNav")[0], //navbar-nav
      navbarOffset = navbar.offsetTop; // Get the offset position of the navbar

    function fixNav()
    {
      if (window.pageYOffset >= 250) // why why i just wanna know why
      {
        navbar.classList.add("fixed-top");
        nav.classList.remove("mx-auto");
      }
      else 
      {
        navbar.classList.remove("fixed-top");
        nav.classList.add("mx-auto");
      }
    }
    fixNav();
    window.addEventListener('scroll', fixNav);
  /*-----------------------------------------------*/
    
  }
    
  render(){
      
    return(

      <div className="navbar_container">
        {
          this.props.wgo != "Login"
          ?
          <div className="cover">
                <img src={logo} alt="logo"/>
          </div>
          :
          <div></div>
        }
        <nav className="navbar navbar-dark navbar-expand" id="navbar">
          <div className="container">
            <div className="collapse navbar-collapse" id="menu">
              <ul className="us parentNav mx-auto">
                <li className="us">
                    <ul className="nav navbar-nav mx-auto">
                      <li className="nav-item ACTIVE" id="iHome">
                        <NavLink className="sc nav-link" exact to="/">Home</NavLink>
                      </li>
                      <li className="nav-item dropdown" id="flr">
                        <NavLink className="nav-link *dropdown-toggle*" id="navbarDropdown" to="/Filiere" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Filiere
                        </NavLink>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" >LP Genie Info</a>
                          <a className="dropdown-item" >SMI</a>
                          <a className="dropdown-item" >TXB</a>
                        </div>
                      </li>
                      <li className="nav-item" id="avis">
                        <NavLink className="nav-link" to="/Avis" >Avis</NavLink>
                      </li>
                      <li className="nav-item" id="iAbout">
                        <a id="lAbout" className="sc nav-link">About</a>
                      </li>
                      <span className="nav-link" >Contact</span>
                    </ul>
                </li>
              </ul>
              <button className="loginButton"  onClick={this.props.LoginClick}>
                {
                  this.props.wgo != "Login"
                  ?
                  <i className="fas fa-user-tie"></i>
                  :
                  <div></div>
                }
              </button>
            </div>
          </div>
        </nav>
      </div>          

    );
  }
}
export default Navbar;
