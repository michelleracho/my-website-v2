import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Navbar.scss';
import logo from '../img/svg/logo.svg';
import logoLg from '../img/svg/logo-lg.svg';

class Navbar extends Component {
  static defaultProps = {
    links: ['About', 'Skills', 'Projects', 'Contact']
  };

  constructor(props) {
    super(props);
    this.state = {
      navIcon: 'bars',
      darkMode: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleNav() {
    const navList = document.querySelector('.Navbar__list');
    navList.classList.toggle('active');

    navList.classList.contains('active')
      ? this.setState({ navIcon: 'times' })
      : this.setState({ navIcon: 'bars' });
  }

  toggleDarkMode() {
    this.setState({
      darkMode: !this.state.darkMode
    });

    const app = document.querySelector('.App');
    !this.state.darkMode ? app.classList.add('dark-mode') : app.classList.remove('dark-mode');

    console.log(`in toggle: ${this.state.darkMode}`);
  }

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
          onClick={this.toggleNav}
        >
          {link}
        </Link>
      </li>
    ));

    return (
      <nav className="Navbar">
        <Link
          activeClass="active-section"
          className="Navbar__logo-link"
          to="home"
          offset={-150}
          spy={true}
          smooth={true}
          duration={1000}
        >
          <picture className="Navbar__logo-container">
            <source srcSet={logo} media="(max-width: 425px)" />
            <img className="Navbar__logo" src={logoLg} alt="logo" />
          </picture>
        </Link>

        {/* for hamburger */}
        <button className="toggle-nav" onClick={this.toggleNav}>
          <i className={`fas fa-${this.state.navIcon}`}></i>
        </button>

        <ul className="Navbar__list">
          {navLinks}
          <button className="btn-dark-mode" onClick={this.toggleDarkMode}>
            DARK
          </button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
