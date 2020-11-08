import React, { Component } from 'react';
import '../../bootstrap/css/bootstrap.min.css'
import './nav.css'
import logo from './dark.png'
import '../../fontawesome/css/all.min.css'
import $ from 'jquery';




class Navbar extends Component {

  
  render(){
    return(
      
      <div className="navbar_container">
          <div className="cover">
            <img src={logo} alt="logo"/>
          </div>

          <nav className="navbar navbar-dark navbar-expand" id="navbar">
            <div className="container">

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="menu">

                <ul className="us parentNav mx-auto">
                  <li className="us">
                    <form id="navForm" method="post">
                        <input type="hidden" name="model" />
                        <input type="hidden" name="flrName" />
                        <ul className="nav navbar-nav mx-auto">
                          <li className="nav-item active" id="iHome">
                            <a href="http://localhost/Departement-math-info/Web/" id="aHome" className="sc nav-link" onclick="goto('Home/home.php')">Home</a>
                          </li>
                          <li className="nav-item dropdown" id="flr">
                            <a className="nav-link *dropdown-toggle*" href="javascript:void(0)" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Filiere
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a className="dropdown-item" href="javascript:void(0)" onclick="whichFlr('Filiere/filiere.php', 'LP Genie Info');">LP Genie Info</a>
                              <a className="dropdown-item" href="javascript:void(0)" onclick="whichFlr('Filiere/filiere.php', 'SMI');">SMI</a>
                              <a className="dropdown-item" href="javascript:void(0)" onclick="whichFlr('Filiere/filiere.php', 'TXB');">TXB</a>
                            </div>
                          </li>
                          <li className="nav-item" id="avis">
                            <a href="javascript:void(0)" onclick="goto('Avis/allAvis.php')" className="nav-link" >Avis</a>
                          </li>
                          <li className="nav-item" id="iAbout"><a id="lAbout" href="index.php#about" className="sc nav-link">About</a></li>
                          <span className="nav-link" onclick="show_dialog(contact)">Contact</span>
                        </ul>

                    </form>
                  </li>
                </ul>
                <button className="loginButton" onclick="show_dialog(login)"><i className="fas fa-user-tie"></i></button>
              </div>
            </div>
          </nav>
      </div>    
            

    );
  }
}
export default Navbar;
