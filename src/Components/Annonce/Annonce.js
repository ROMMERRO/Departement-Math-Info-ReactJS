import React, { Component, Fragment } from 'react';
import '../../bootstrap/css/bootstrap.min.css'
import './Annonce.css'
import img from './img.jpg'
import $ from 'jquery';


class Annonce extends Component {
   
  render(){
    return(     

      <div id="ancSlide" className="carousel slide slide-annonce" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="annonce_container">
              <div className="cover">
                <img src={img} alt=""/>
              </div>
              <div className="description">
                <div className="header">
                  <h3><b>Peaky Blinders</b></h3>
                </div>
                <div className="body">
                  <p>
                    Peaky Blinders is a British period crime drama television series created
                    by Steven Knight. Set in Birmingham, England, the series follows the exploits
                    of the Shelby crime family in the direct aftermath of the First World War.
                    The fictional family is loosely based on a real 19th century urban youth
                    gang of the same name, who were active in the city from the 1890s to the
                    early twentieth century.Peaky Blinders is a British period crime drama
                    television series created by Steven Knight. Set in Birmingham, England,
                    the series follows the exploits of the Shelby crime family in the direct
                    aftermath of the First World War. The fictional family is loosely based
                    on a real 19th century urban youth gang of the same name, who were active
                    in the city from the 1890s to the early twentieth century.
                    </p>
                </div>
                <div className="footer">
                  <b>auteur: Romerro</b>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="annonce_container">
              <div className="cover">
                <img src={img} alt=""/>
              </div>
              <div className="description">
                <div className="header">
                  <h3><b>Peaky Blinders</b></h3>
                </div>
                <div className="body">
                  <p>
                    Peaky Blinders is a British period crime drama television series created
                    by Steven Knight. Set in Birmingham, England, the series follows the exploits
                    of the Shelby crime family in the direct aftermath of the First World War.
                    The fictional family is loosely based on a real 19th century urban youth
                    gang of the same name, who were active in the city from the 1890s to the
                    early twentieth century.Peaky Blinders is a British period crime drama
                    television series created by Steven Knight. Set in Birmingham, England,
                    the series follows the exploits of the Shelby crime family in the direct
                    aftermath of the First World War. The fictional family is loosely based
                    on a real 19th century urban youth gang of the same name, who were active
                    in the city from the 1890s to the early twentieth century.
                    </p>
                </div>
                <div className="footer">
                  <b>auteur: Romerro</b>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="annonce_container">
              <div className="cover">
                <img src={img} alt=""/>
              </div>
              <div className="description">
                <div className="header">
                  <h3><b>Peaky Blinders</b></h3>
                </div>
                <div className="body">
                  <p>
                    Peaky Blinders is a British period crime drama television series created
                    by Steven Knight. Set in Birmingham, England, the series follows the exploits
                    of the Shelby crime family in the direct aftermath of the First World War.
                    The fictional family is loosely based on a real 19th century urban youth
                    gang of the same name, who were active in the city from the 1890s to the
                    early twentieth century.Peaky Blinders is a British period crime drama
                    television series created by Steven Knight. Set in Birmingham, England,
                    the series follows the exploits of the Shelby crime family in the direct
                    aftermath of the First World War. The fictional family is loosely based
                    on a real 19th century urban youth gang of the same name, who were active
                    in the city from the 1890s to the early twentieth century.
                    </p>
                </div>
                <div className="footer">
                  <b>auteur: Romerro</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#ancSlide" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#ancSlide" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    );
  }
}
export default Annonce;





















