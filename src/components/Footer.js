import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <p className="Footer__copyright">
          &copy; 2020 <span>Michelle Racho</span>
        </p>
        <p className="Footer__message">
          My portfolio is nothing flashy or impressive, but I have the heart and desire to learn and
          grow.
        </p>
      </footer>
    );
  }
}

export default Footer;
