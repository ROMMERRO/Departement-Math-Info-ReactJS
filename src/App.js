import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Header/Navbar'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Filiere from './Components/Filiere/Filiere'
import Avis from './Components/Avis/Avis'



class App extends Component {

    constructor(){
        super();
        this.state = {
            wgo:'somthing else'
        }
    }

    LoginClick = () => {
        this.setState({wgo : "Login"});
    }    

    render() {
        return (
            <BrowserRouter>
                <Navbar  LoginClick={this.LoginClick} wgo={this.state.wgo}/>
                {
                    () => { if(this.state.wgo == "Login") return (<Login/>) }
                }
                <Route exact path="/" component={Home} />
                <Route path="/Filiere" component={Filiere} />
                <Route path="/Avis" component={Avis} />
            </BrowserRouter>
        );
    }
  
}

export default App;
