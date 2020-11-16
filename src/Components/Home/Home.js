import React, { Component } from 'react';
import './Home.css';
import Annonce from '../Annonce/Annonce'
import SideBar from '../SideBar/sideBar'
import AvisContainer from '../Avis/avisContainer/avisContainer'


class Home extends Component {
  componentDidMount() {
    document.getElementById('iHome').classList.add("active");
  }
  componentWillUnmount() {
    document.getElementById('iHome').classList.remove("active");
  }
  render() {

    return (
      <div>
        <div className="buffer"></div>
        <div className="home">
            <SideBar id="sidebar"/>
            <Annonce id="annonce"/> 
            <AvisContainer id="avis"/>
            <div id="about"></div>
        </div>
      </div>
    )

  }
  
}

export default Home;
