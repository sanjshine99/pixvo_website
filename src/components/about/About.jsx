import React from 'react'
import './About.css'
import Data from './content/Data'
import Card from './content/Card'


function About() {
   return (
    <section className="aboutsection" id="about">
      <div className="about__container container">
        <div className="about__content">
          <div className="about__area">
          <Data />
          </div>
          <div className="aboutcard__area">
          <Card />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About