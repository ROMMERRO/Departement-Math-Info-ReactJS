import React, { Component } from 'react';
import '../../bootstrap/css/bootstrap.min.css'
import './Login.css'
import logo from '../Header/light.png'
import '../../fontawesome/css/all.min.css'



class Login extends Component {

	componentDidMount() {
		window.scrollTo(0, 500);
		document.body.style.overflow = "hidden";

	}
	componentWillUnmount() {
		document.body.style.overflow = "inherit";
	}

	render(){
		
		return(

			<div className="login_container">
				<div className="login_dialog" ></div>
				<div className="login_box">
					<img src={logo}/>
					<div className="formulaire">
						<form action="/" method="post">
							<div className="inputIcon">
								<input type="text" name="username" placeholder="Username or Email"/>
								<i className="fas fa-user-alt"/>
							</div>

							<div className="inputIcon">
								<input type="password" name="password" placeholder="Password"/>
								<i className="fas fa-lock"/>
							</div>
								
							<input type="button" name="login" value="Login"/>
							<input type="button" name="cancel" value="Cancel"/>

						</form>
					</div>
				</div>
			</div>

		);
	}
}
export default Login;








