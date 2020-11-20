import React from 'react';
import AvisWidget from '../avisWidget/avisWidget.js';
import './avisContainer.css';

class AvisContainer extends React.Component{

    render(){
        return(
            <div className="avisConatiner">
                    <>
                        <AvisWidget  />
                        <AvisWidget  />
                        <AvisWidget  />
                        <AvisWidget  />
                        <AvisWidget  />
                        <AvisWidget  />
                    </>
            </div>
        )
    }
    
}
export default AvisContainer;