import React, { Component } from 'react';
import './sideBar.css'
import logo from './chefDep.jpg';

class SideBar extends Component {

  componentDidMount() {
    let
      tag = document.getElementsByClassName('tag'),
      act = document.getElementsByClassName('act_item');

    for (var i = 0; i < 7; i++) {
      let
        wTag = parseInt(getComputedStyle(tag[i]).width),
        wAct = parseInt(getComputedStyle(act[i]).width),
        left = (100 - (wTag * 100 / wAct)) / 2;
      tag[i].style.left = "" + left + "%";
    }
  }

  render() {
    return(
      <div className="sidebar_container">
        <section className="actualite">
            <h3 className="act_header">Actualitées</h3>
            <div className="act_body">
              <a href="localhost:3000" className="act_item">
                <span>avis aux etudiants LP GI S4</span>
                <span className="badge badge-pill tag">avis</span>
              </a>
              <a href="localhost:3000" className="act_item">
                <span>avis aux etudiants LP GI S4</span>
                <span className="badge badge-pill tag">avis</span>
              </a>
              <a href="localhost:3000" className="act_item">
                <span>avis aux etudiants LP GI S4</span>
                <span className="badge badge-pill tag">avis</span>
              </a>
              <a href="localhost:3000" className="act_item">
                <span>avis aux etudiants LP GI S4</span>
                <span className="badge badge-pill tag">avis</span>
              </a>
              <a href="localhost:3000" className="act_item">
                <span>evenement maroc telecom</span>
                <span className="badge badge-pill tag">annonce</span>
              </a>
              <a href="localhost:3000" className="act_item">
                <span>reunion des enseignats du GI</span>
                <span className="badge badge-pill tag">reunion</span>
              </a>
              <a href="localhost:3000" className="act_item">
                <span>evenement de l enactus</span>
                <span className="badge badge-pill tag">annonce</span>
              </a>
            </div>
        </section>
        <section className="departement">
              <h3 className="dept_header">Brief Departement</h3>
              <div className="dept_body">
                <img src={logo} alt="chef de departement" /><br/>
                <h5>Youssef Essaadi</h5>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque qui quo dignissimos non eum nihil perferendis vero?
                  Laudantium modi veniam, praesentium ex sed nisi perspiciatis
                  consequuntur voluptatibus dignissimos. Illum, iure!
                  consequuntur voluptatibus dignissimos. Illum, iure!
                  consequuntur voluptatibus dignissimos. Illum, iure!
                  consequuntur voluptatibus dignissimos. Illum, iure!
                  consequuntur voluptatibus dignissimos. Illum, iure!
                  consequuntur voluptatibus dignissimos. Illum, iure!
                  consequuntur voluptatibus dignissimos. Illum, iure!
                  consequuntur voluptatibus dignissimos. Illum, iure!
                </p>
              </div>
        </section>
      </div>

    )
  }
  
}

export default SideBar;