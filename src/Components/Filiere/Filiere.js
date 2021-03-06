import React, { Component } from 'react';
import './Filiere.css';
import logo from './logo.png'
import img1 from './image1.jpg'
import img2 from './image2.jpg'



class Filiere extends Component {

  componentDidMount() {
      document.getElementById('flr').classList.add("active")
    }
    componentWillUnmount() {
      document.getElementById('flr').classList.remove("active")
    }
  render() {
      return (
        <main className="filiere">
          <div className="container">
            <div className="prem">
              <div className="images">
                <img src={logo} alt="Departement Math Informatique" width="40%" style={{marginTop: "15px"}}/>
              </div>
              <h5><span className="badge badge-pill" id="sl">Licence professionelle</span></h5>
              <h5><span className="badge badge-pill" id="sr">{this.props.flrIs}</span></h5>
            </div>
            <br/><br/>
            <div className="deux">
              <h3>OBJECTIFS DE LA FORMATION</h3>
              <p>La formation de la licence professionelle <b>Génie Informatique</b> se déroule en six semestre.L'objectif principale de cette formation est de former des informations opérationnels et compétents dans les différents domaines de l'informatique en particulier,la conception et le développement de logiciels, les technologies Web , la mise en oeuvre de systèmes d'information,la configuration et l'administration des réseaux,l'administration de bases de donnés ,les nouvelles technologies mobiles, l'analyse de données etc.  </p>
            </div>
            <br/><br/>
            <div className="trois">
              <h3>COMPTENCE A ACQUERIR</h3>
              <p>Pendant les semestres 1 et 2 l'étudiant commence à étudier des concepts en informatique (algorithmique, programmation) avec des modules de base en mathématiques, en physique, en statistique et probavbilités, en électronique numérique et environnement d'entreprise.
                -Au semestres 3 et 4 la formation va permettre à l étudiant d'acquérir des compétences avancées en informatiques à savoir les structures des donnes, la programmation orientée objet, la conception UML, les réseaux informatiques, les systémes d'informations, les bases de données, la compilation, la programmation web, l'architecture des ordinateurs et systèmes d'exploitation.
                <br/>
                -Au semestre 5 et 6, l'étudiant va acquérir les techniques avancée en : programmation objet, réseaux ,et l'administration des bases de données, technologies web, programmataion mobile et l'analyse de données, avec un stage en entreprise pendent le semestre 6.
                <br/>
                -L'étudiant est aussi appelé à développer son esprit d'équipe, son autonomie et son savoir de présenteret de soutenir un travail à travers le module de projet.
              </p>
            </div>
            <br/><br/>
            <div className="qautre">
              <h3>DEBOUCHES DE LA FORMATION</h3>
              <p>
                Les lauréats de la filière peuvent intégrer :
                <br/>
                * <b>Masters de recherche </b>
                <br/>
                * <b>Masters spécialisés</b>
                <br/>
                * <b>Grandes écoles en igénierie informatique</b>
                <br/>
                * <b>Postes informatiques de développement ou d'administration</b>
                <br/>
                * <b>Postes informatiques ayant aspect académique</b>
              </p>
            </div>
            <br/><br/>
            <div className="cinq">
              <h3>CONDICTIONS D'ACCES</h3>
              <p>
                <b>MODALITES D'ADMISSION</b>  (la norme RG3 du CNPN prévoit que la sélection des candidats se fait par voie de test écrit et de toute autre modalité prévue dans le descriptif de la filiére)<br/>
                -<b>Diplomes requis : Bacclauréat sciences mathématiques , Bacclauréat sciences physiques</b><br/>
                -<b>Procédures de sélection :</b>
                <b> Etude du dossier. Critère de sélection: </b> moyenne nationale en BAC, année d'obtention de BAC, notes des matières principales (Mathématiques, Physique).
                <b>Test écrit (TE) :</b> Les étudiants dont les dossiers ont été retenus peuvent etre convoqués à passer un test écrit.
                <b>Entertien oral :</b>Si nécessaire.
              </p>
            </div>
            <br/><br/>
            <div className="img1">
              <h3>ARTICULATION DE LA FILIERE AVEC LES FORMATIONS DISPENSES AU NIVEAU DE L'UNIVERSITE ET AU DE L'ETABLISSEMENT</h3>
              <div className="images">
                <img src={img1} alt="" className="im1"/>
              </div>
            </div>
            <br/><br/>
            <div className="img2">
              <h3>DESCRIPTION DE LA FORMATION </h3>
              <div className="images">
                <img src={img2} alt="" className="im2"/>
              </div>
            </div>
            <div className="cFiliere">
              <h3> Coordonnateur de la filière Génie Informatique</h3>
              <div className="chef">
                <h4>Youssef ES-SAADY </h4>
                <h6>y.essaady@uiz.ac.ma</h6>
              </div>
            </div>
          </div>
        </main>   
      );
  }
}

export default Filiere;
