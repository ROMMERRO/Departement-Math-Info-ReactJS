import React, { Component } from 'react'
import {NavLink, Link} from 'react-router-dom'
import '../../bootstrap/css/bootstrap.min.css'
import '../../fontawesome/css/all.min.css'
import './Navbar.css'
import $ from 'jquery';



class Navbar extends Component {

  componentDidMount()
  {

  /*----------fix the navbar after scroll----------*/
    // Get the navbar
    const 
      navbar = document.getElementById("navbar"),
      nav = document.getElementsByClassName("parentNav")[0]; //navbar-nav
      //navbarOffset = navbar.offsetTop; // Get the offset position of the navbar

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

      <nav className="navbar navbar-dark navbar-expand" id="navbar">
        <div className="container">
          <div className="collapse navbar-collapse" id="menu">
            <ul className="us parentNav mx-auto">
              <li className="us">
                  <ul className="nav navbar-nav mx-auto">
                    <li className="nav-item" id="iHome">
                      <NavLink className="sc nav-link" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item dropdown" id="flr">
                      <span className="nav-link *dropdown-toggle*" id="navbarDropdown" to="/Filiere" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filiere
                      </span>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/Filiere" className="dropdown-item" onClick={(flr) => this.props.chooseFlr("Génie Informatique")}>LP Genie Info</Link>
                        <Link to="/Filiere" className="dropdown-item" onClick={(flr) => this.props.chooseFlr("Science Math Informatique")}>SMI</Link>
                        <Link to="/Filiere" className="dropdown-item" onClick={(flr) => this.props.chooseFlr("Technologie X Bio")}>TXB</Link>
                      </div>
                    </li>
                    <li className="nav-item" id="avis">
                      <NavLink className="nav-link" to="/Avis" >Avis</NavLink>
                    </li>
                    <li className="nav-item" id="iAbout">
                      <span id="lAbout" className="sc nav-link">About</span>
                    </li>
                    <NavLink to="/Contact" className="nav-link" >Contact</NavLink>
                  </ul>
              </li>
            </ul>
            <button title="login as prof" className="loginButton">
              <Link to="/Login" style={{textDecoration:"none",color:"inherit"}}>
                <i className="fas fa-user-tie" />
              </Link>
            </button>
          </div>
        </div>
      </nav>

    );
  }
}
export default Navbar;
