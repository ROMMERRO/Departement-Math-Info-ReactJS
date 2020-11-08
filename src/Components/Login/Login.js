import React, { Component } from 'react';
import '../../bootstrap/css/bootstrap.min.css'
import './Login.css'
import logo from './logo.png'
import '../../fontawesome/css/all.min.css'
import $ from 'jquery';




class Login extends Component {
  
  render(){
    return(

		<div className="login_container">
			<div className="login_dialog" onclick="hide_dialog(login)"></div>
			<div className="login_box">
					<img src={logo} />
				<div className="formulaire">
					<form action="">
						<div className="inputIcon">
							<input type="text" name="username" placeholder="Username or Email"/>
							<i className="fas fa-user-alt"/>
						</div>

						<div className="inputIcon">
							<input type="password" name="password" placeholder="Password"/>
							<i className="fas fa-lock"/>
						</div>

						<input type="submit" name="login" value="Login"/>

					</form>
				</div>
			</div>
		</div>

    );
  }
}
export default Login;








