import React, { Component } from 'react';
import './Home.css';
import Annonce from '../Annonce/Annonce'
import SideBar from '../SideBar/sideBar'
import AvisContainer from '../Avis/avisContainer/avisContainer'
import About from '../About/about'


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
            <About/>
        </div>
      </div>
    )

  }
  
}

export default Home;
