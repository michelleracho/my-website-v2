import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Navbar.scss';
import logo from '../img/svg/logo.svg';

class Navbar extends Component {
  static defaultProps = {
    links: ['About', 'Skills', 'Projects', 'Contact']
  };

  render() {
    const navLinks = this.props.links.map(link => (
      <li key={link} className="Navbar__item">
        <Link
          activeClass="active-section"
          className="Navbar__link"
          to={link.toLowerCase()}
          offset={-150}
          spy={true}
          smooth={true}
          duration={1000}
        >
          {link}
        </Link>
      </li>
    ));

    return (
      <nav className="Navbar">
        <Link
          activeClass="active-section"
          className="Navbar__logo-container Navbar__link"
          to="home"
          offset={-150}
          spy={true}
          smooth={true}
          duration={1000}
        >
          <img className="Navbar__logo" src={logo} alt="logo" />
          <h3>Michelle Racho</h3>
        </Link>

        <ul className="Navbar__list">{navLinks}</ul>

        <button className="btn-dark-mode">DARK</button>
      </nav>
    );
  }
}

export default Navbar;
