import React from 'react';
import './avisWidget.css';

const AvisWidget = ({displayAvis}) =>{
        return(
            <div className="avis_container" onClick={() => displayAvis()}>
                    <div className="card mb-3">
                        <div className="card-header">Avis</div>
                            <div className="card-body">
                                <h5 className="card-title">TP5 technology web</h5>
                                <p className="card-text">tp 5 technology web</p>
                                <hr />
                                <p><b>LP GI S4</b></p>
                                <p className="date"><b>02-05-2020</b></p>
                            </div>
                        </div>
                    </div>
    )
   
}

export default AvisWidget;