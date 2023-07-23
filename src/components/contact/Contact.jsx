// Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact__container">
      <h1>Contact</h1>
      <h2 id="desc">Describe your project with us to elevate your <br />product to the next level.</h2>
      <form className="contact__form">
        <div className="input__group input__group--inline">
          <input type="text" id="name" name="name" placeholder="Name" />
        </div>
        <div className="input__group input__group--inline"><input type="email" id="email" name="email" placeholder="Email" /></div>
        <div className="input__group input__group--message">
          <textarea id="message" name="message" rows="6" placeholder="Message" />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
