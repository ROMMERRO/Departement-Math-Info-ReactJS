import React, { Component } from 'react';
import './Home.css';
import Navbar from '../Header/Navbar'
import Annonce from '../Annonce/Annonce'
import SideBar from '../SideBar/sideBar'
import AvisContainer from '../Avis/avisContainer/avisContainer'
import Login from '../Login/Login'
// import Contact from '../Contact/Contact'
// import Login from '../Login/Login'

class Home extends Component {
  constructor(){
    super();
    this.state ={
      wgo:'somthing else'
    }
  }

  LoginClick =()=>{
   this.setState({wgo : "Login"});
  }

  render() {
    return (
    
        <div>
               <Navbar  LoginClick={this.LoginClick} wgo={this.state.wgo}/>
              {(() => {
  
                switch (this.state.wgo) {
                  case 'Login':
                      return (
                        <Login/>
                      )
                  case 'Manager':
                      return (
                        <div>You are a Manager.</div>
                      )
                  default:
                      return (
                        <div>
                          <div className="buffer"></div>
                          <div className="home">
                              <SideBar id="sidebar"/>
                              <Annonce id="annonce"/> 
                              <AvisContainer id="avis"/>
                              <div id="about"></div>
                          </div>
                              <div id="footer"></div>
                        </div>
                      )
                }

              })()}
        </div>
    );
  }
  
}

export default Home;
