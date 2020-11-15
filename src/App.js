import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Header/Navbar'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Filiere from './Components/Filiere/Filiere'
import Avis from './Components/Avis/Avis'
import Contact from './Components/Contact/Contact'



class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <Route exact path="/" component={Home} />
                <Route path="/Filiere" component={Filiere} />
                <Route path="/Avis" component={Avis} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Login" component={Login} />
            </BrowserRouter>
        );
    }
  
}

export default App;
