import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <p to="/about">About Us</p>
        <p to="/services">Services</p>
        <p to="/projects">Projects</p>
      </div>
      <hr className="footer__bar" />
      <p className="footer__copy">&copy; 2023 Pixvo.Studio</p>
    </footer>
  );
}

export default Footer;
