import React, { Component } from 'react';
import './About.scss';
import photoSquare from '../img/mracho-square.png';
import photoRectangle from '../img/mracho-rectangle.jpg';

class About extends Component {
  render() {
    return (
      <section className="About" id="about">
        <h2 className="section-title" data-title="About">
          Get to know me
        </h2>

        <div className="About__container">
          <picture className="About__photo-container">
            <source srcset={photoRectangle} media="(max-width: 1100px)" />
            <img className="About__photo" src={photoSquare} alt="" />
          </picture>

          <div className="About__description">
            <p>
              My name is <span className="highlight">Michelle Angela Racho</span> and I'm a
              front-end focused web developer living in Evans, GA.
            </p>
            <p>
              I am a growth-oriented team player that has strong attention to detail who also works
              well independently and because of my previous role as an account manager, I have
              developed strong customer service skills. I am passionate about learning new things
              and technologies that will expand my knowledge within all aspects of Computer Science
              especially in front-end development.
            </p>
            <p>
              My personal mission is to further my specialization in front-end development, work
              with amazing people to help develop cool products and one day be able to mentor new
              developers. I am constantly pushing myself out of my comfort zone to learn more and
              make these dreams a reality.
            </p>

            <a href="#" className="cta">
              Resume
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
