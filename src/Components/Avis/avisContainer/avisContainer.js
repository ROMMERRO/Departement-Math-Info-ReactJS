import React from 'react';
import AvisWidget from '../avisWidget/avisWidget.js';
import AvisCard from '../avisCard/avisCard.js';
import './avisContainer.css'

class AvisContainer extends React.Component{
    constructor(){
        super();
        this.state ={
            avisCard : false
        } 
    }

    displayAvis =()=>{
        this.setState({avisCard : true});
    }
    render(){
        return(
            <div className="avisConatiner">
                {
                    this.state.avisCard === true 
                    ?
                    <AvisCard />
                    :
                    <>
                        <AvisWidget  displayAvis={this.displayAvis}/>
                        <AvisWidget  displayAvis={this.displayAvis}/>
                        <AvisWidget  displayAvis={this.displayAvis}/>
                        <AvisWidget  displayAvis={this.displayAvis}/>
                        <AvisWidget  displayAvis={this.displayAvis}/>
                    </>
                }   
            </div>
        )
    }
    
}
export default AvisContainer;