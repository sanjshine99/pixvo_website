import React from 'react'
import '../About.css'
import Image from '../../../assets/art.webp'
function Data() {
  return (
    <section className="aboutsection" id="about">
      <div className="about__container container">
        <div className="about__content">
        <h1>About</h1>
        <div className="about__area">
            <img src={Image} alt="Art"  id ="aboutimg"/>
            <div className="about__area">
            <p>
              We are a team of developers and designers with backgrounds in motion graphics,<br/>
              3D modeling and rendering, product design, UI UX, and front end development.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Data