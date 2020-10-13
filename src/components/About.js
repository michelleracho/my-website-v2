import React, { Component } from 'react';
import './About.scss';
import aboutPhoto from '../img/mracho-photo v4.png';

class About extends Component {
  render() {
    return (
      <section className="About" id="about">
        <h1 className="section-title">About</h1>
        <div className="About__photo-container">
          <img src={aboutPhoto} alt="about photo" className="About__photo" />
        </div>
        <div className="About__description">
          <p>
            My name is <span class="highlight">Michelle Angela Racho</span> and I'm an aspiring
            frontend developer living in Evans, GA. I completed my Bachelor's degree in Computer
            Science at Augusta University and I am eager to start a career in web development.
          </p>

          <p>
            I am a growth-oriented team player that has strong attention to detail who also works
            well independently and because of my previous role as an account manager, I have
            developed strong customer service skills. I am a naturally curious and continuous
            learner. I am passionate about learning new things and technologies that will expand my
            knowledge within all aspects of Computer Science especially in web development.
          </p>

          <p>
            My personal mission is to further my specialization in front-end development, work with
            amazing people and help develop cool products. I am constantly pushing myself out of my
            comfort zone to learn more and make my dreams come true.
          </p>
        </div>
        <a href="#" className="cta">
          Resume
        </a>
      </section>
    );
  }
}

export default About;
