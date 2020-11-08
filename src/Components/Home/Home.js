import React, { Component } from 'react';
import './Home.css';
import Navbar from '../Header/Navbar'
import Annonce from '../Annonce/Annonce'
import Contact from '../Contact/Contact'
import Login from '../Login/Login'
import SideBar from '../SideBar/sideBar'
import AvisContainer from '../Avis/avisContainer/avisContainer'


class Home extends Component {


  render() {
    return (
      <div>
        
        <Navbar/>
        <div className="ancbx">
          <Annonce/>        
        </div>
        <div className="sbbx">
            <SideBar/>
        </div>
        <AvisContainer/>
        
      </div>
    );
  }
  
}

export default Home;
