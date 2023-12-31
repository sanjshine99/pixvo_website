import React from 'react';
import Video from './content/video';
import Data from './content/data';
import Reviews from './content/reviews';
import './Home.css'

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__content">
          <div className="video__area">
            <Video />
          </div>
          <div className="data__area">
            <Data />
          </div>
          <div id='review'><h2>Hear from our clients</h2></div>
          <div className="reviews__area-container">
        <Reviews />
      </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
