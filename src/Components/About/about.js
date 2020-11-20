import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./about.css";
import logo from './lelouch.jpg';

const About =()=>{
        return (
          <div className="about_container">
                        <Carousel showArrows={true}>
                        <div class="container">
                 
                        <img src={logo} class="card-img" alt="..."/>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">Le doyen</h5>
                          <p class="card-text">Lelouch vi Britannia (ルルーシュ・ヴィ・ブリタニア, Rurūshu vi Buritania), whose alias is Lelouch Lamperouge (ルルーシュ・ランペルージ, Rurūshu Ranperūji), is the title character and protagonist of the Sunrise anime series Code Geass: Lelouch of the Rebellion. In the series, Lelouch is a former prince from the superpower Britannia who is given the power of the "Geass" by a witch known as C.C. Using the Geass and his genius-level intellect, Lelouch
                             becomes the leader of the resistance movement known as The Black Knights under his alter ego Zero (ゼロ) to destroy the Holy Britannian Empire, an imperial monarchy that has been conquering various countries under control from his father. He is voiced by Jun Fukuyama, and his child self is voiced by Sayaka Ohara.
                          </p>
                        </div>
                      </div>
                      <div>
                      </div>  
               
              </div>
                <div class="card-body">
                          <h5 class="card-title">fpt</h5>
                          <p class="card-text fpt-info">Lelouch vi Britannia (ルルーシュ・ヴィ・ブリタニア, Rurūshu vi Buritania), whose alias is Lelouch Lamperouge (ルルーシュ・ランペルージ, Rurūshu Ranperūji), is the title character and protagonist of the Sunrise anime series Code Geass: Lelouch of the Rebellion. In the series, Lelouch is a former prince from the superpower Britannia who is given the power of the "Geass" by a witch known as C.C. Using the Geass and his genius-level intellect, Lelouch becomes the leader of the resistance movement known as The Black Knights under his alter ego Zero (ゼロ) to destroy the Holy Britannian Empire, an imperial monarchy that has been conquering various countries under control from his father. He is voiced by Jun Fukuyama, and his child self is voiced by Sayaka Ohara.</p>
                </div>
                <div>
                  <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.8844191227845!2d-8.871443685544811!3d30.496021304054707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb17364c0b9166b%3A0xf4d0e2d7847e8c26!2sFacult%C3%A9%20Polydisciplinaire%20de%20Taroudant!5e0!3m2!1sen!2sma!4v1591719203651!5m2!1sen!2sma" width="975vh" height="350vh" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> 
                </div>  
            </Carousel>
            
          </div>
        );
    }
export default About;