import React, { Component } from 'react';
import Navlink from './Navlink';
import './Navbar.scss';
import logoSm from '../img/svg/logo-sm.svg';
import logoLg from '../img/svg/logo-lg.svg';

class Navbar extends Component {
  static defaultProps = {
    links: ['About', 'Skills', 'Projects', 'Contact']
  };

  // create nav links to display
  makeNavLinks() {
    let navLinks = [];
    for (let link of this.props.links) {
      navLinks.push(
        <li key={link} className="Navbar__item">
          <Navlink text={link} href={`#${link.toLowerCase()}`} />
        </li>
      );
    }
    return navLinks;
  }

  render() {
    return (
      <nav className="Navbar">
        <div className="Navbar__logo-container">
          <a href="#home">
            <img className="Navbar__logo" src={logoSm} alt="logo" />
            <h3>Michelle Racho</h3>
          </a>
        </div>

        <ul className="Navbar__list">{this.makeNavLinks()}</ul>

        <button className="btn-dark-mode">DARK</button>
      </nav>
    );
  }
}

export default Navbar;
