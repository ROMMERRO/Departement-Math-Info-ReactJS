import React, { Component } from 'react';
import './Footer.css';
import logo from './logo.png'
import fpt from './fpt.png'




class Footer extends Component {

    render() {
        return (          
            <div className="footer_container">
                <div className="left-box">
                    <a href="#top" className="sc"><i className="fas fa-chevron-circle-up"></i></a>
                    <img src={logo} alt="logo"/>
                    <img src={fpt} alt="fpt"/>
                    <div className="social-media">
                        <a href="https://twitter.com" target="blank"> <i className="fab fa-twitter"></i> </a>
                        <a href="https://facebook.com/siteFPT/" target="blank"> <i className="fab fa-facebook-f"></i> </a>
                        <a href="https://www.youtube.com/channel/UCJkXdGXw4vGU7QhHNa61OTA" target="blank"> <i className="fab fa-youtube"></i> </a>
                        <a href="https://aboutme.google.com" target="blank"> <i className="fab fa-google-plus-g"></i> </a>
                    </div>
                </div>
                <div className="right-box">
                    <h2> CONTACTEZ NOUS </h2>
                    <hr color="#0092ca" width="50"/>
                    <div className="local">
                        <i className="fas fa-map-marker-alt"></i>
                        <span> faculté polydisciplinaire - Hay El Mouhammadi - (Lastah) - B.P: 207 - 83000 Taroudant, Maroc</span>
                    </div>
                    <div className="phone">
                        <i className="fas fa-phone-alt"></i>
                        <span>+212 (0) 528 551 010</span>
                    </div>
                    <div className="fax">
                        <i className="fas fa-fax"></i>
                        <span>+212 (0) 528 551 020</span>
                    </div>
                    <div className="web-site">
                        <i className="fas fa-globe"></i>
                        <span>www.dmi.ac.ma</span>
                    </div>
                </div>
                <div className="bottom-box">
                    <h3>Departement math infotmatique  | © 2020 All Rights Reserved</h3>
                </div>
            </div>
        );
    }
  
}

export default Footer;
