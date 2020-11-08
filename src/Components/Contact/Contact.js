import React, { Component, Fragment } from 'react';
import '../../bootstrap/css/bootstrap.min.css'
import './Contact.css'
import logo from './logo.png'
import '../../fontawesome/css/all.min.css'
import $ from 'jquery';


class Contact extends Component {
  
	componentDidUpdate() {
		count();
		function count() {
			document.getElementById('iVar').textContent = document.getElementById('txt').textLength;
			if (document.getElementById('txt').textLength == 500) {
			  document.getElementById('iVar').style.color = "red";
			}
			else {
			  document.getElementById('iVar').style.color = "inherit";
			}
		}
				
	}
	render(){
		return(     

			<div className="contact_dialog">

				<div className="back" onclick="hide_dialog(contact)"></div>
				<div className="contact_container">
					<h1 className="header">Contactez Nous</h1>

					<section className="left-box">

						<form>
								<input type="text" placeholder="votre nom et prenom" name="name" className="inputs"/>
								<br/> <br/>
								<input type="Email"placeholder="votre email"  name="email" className="inputs"/>
								<br/> <br/>
								<input type="tel"placeholder="votre telephone"  name="phone" className="inputs"/>

									<label className="object">Message
										<input type="radio" name="object" value="msg" checked="checked"/>
										<span className="checkmark"></span>
									</label>
									<label className="object">Question
										<input type="radio" name="object" value="qst"/>
										<span className="checkmark"></span>
									</label>
									<label className="object">Reclamation
										<input type="radio" name="object" value="rec"/>
										<span className="checkmark"></span>
									</label>
								<textarea placeholder="votre message" className="msg inputs" id="txt" onkeyup="count()" maxlength="500"></textarea>
									<span className="count"><span id="iVar">0</span>/500</span>
								<br/>
								<input type="submit" value="Send" name="send" className="send"/>
							</form>

					</section>

					<section  className="right-box">
						<img src={logo} style={{width:"250px", height:"auto"}} />
						<br/>
						<span><i className="fa fa-map-marker-alt" aria-hidden="true"></i><b>Adress &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp&nbsp&nbsp&nbsp&nbsp</b> Hay El Mouhammadi - (Lastah) - B.P: 207 - 83000 Taroudant, Maroc</span>
						<br/>
						<span><i className="fa fa-phone"></i><b>Tel &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp&nbsp&nbsp&nbsp&nbsp</b> +212 5 28 55 10 10</span>
						<br/>
						<span><i className="fa fa-fax" aria-hidden="true"></i><b>Fax &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp&nbsp&nbsp&nbsp&nbsp</b> +212 5 28 55 10 20</span>
						<br/>
						<span><i className="fa fa-envelope" aria-hidden="true"></i><b>Email &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp :&nbsp&nbsp&nbsp&nbsp&nbsp</b> departement_fpt@gmail.com</span>
						<br/>
						<span><i className="fab fa-facebook-square"></i><b>Fecebook &nbsp&nbsp:&nbsp&nbsp&nbsp&nbsp&nbsp </b> Antari Jelali</span>
						<br/>
						<span><i className="fas fa-globe" aria-hidden="true"></i><b>Site &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp&nbsp&nbsp&nbsp&nbsp</b> <a href=""> www.dmi.ac.ma</a></span>
					</section>

				</div>

			</div>

		);
	}
}

export default Contact;