import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Filiere from './Components/Filiere/Filiere'
import Avis from './Components/Avis/Avis'
import Contact from './Components/Contact/Contact'



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          whichFlr: "",
          prevFlr: ""
        }
      }
      
      
      chooseFlr = (flr) => {
        this.setState(prev => {
            return {
                whichFlr: flr,
                prevFlr: prev.whichFlr
            }

        },console.log(this.state))
      }

    render() {
        return (
            <BrowserRouter>
                <Header chooseFlr={(flr) => this.chooseFlr(flr)}/>
                <Route exact path={"/"} component={Home} />
                <Route 
                    path="/Filiere" 
                    render={() => (
                        <Filiere flrIs= {this.state.whichFlr} />
                      )}
                 />
                <Route path="/Avis" component={Avis} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Login" component={Login} />
                <Footer/>
            </BrowserRouter>
        );
    }
  
}

export default App;
