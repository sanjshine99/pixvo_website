import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

function Data() {
  return (
    <div className="data__area">
      <h1>Pixvo Studio</h1>
      <div className="quote">
        "
        <p className='para__title'>Elevating Designs to New Heights:</p>
        <p className='para__content'>Immerse Yourself in our Dynamic Portfolio Showcasing our Artistry."</p>
      </div>
      <div className="buttons">
        <Link to="/about">
          <button>About Us</button>
        </Link>
        <Link to="/project">
          <button>Our Work</button>
        </Link>
      </div>
    </div>
  );
}

export default Data;
