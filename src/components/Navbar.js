import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Navbar.scss';
import logo from '../img/svg/logo.svg';
import logoLg from '../img/svg/logo-lg.svg';
import { ReactComponent as Sun } from '../img/svg/sun.svg';
import { ReactComponent as Moon } from '../img/svg/moon.svg';

class Navbar extends Component {
  static defaultProps = {
    links: ['About', 'Skills', 'Projects', 'Contact']
  };

  constructor(props) {
    super(props);
    this.state = {
      navIcon: 'bars',
      darkMode: JSON.parse(window.localStorage.getItem('darkMode') || 'false'),
      darkModeIcon: <Sun ref={this.svgRef} />
    };
    this.svgRef = React.createRef();
    this.overlayRef = React.createRef();
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  componentDidMount() {
    const app = document.querySelector('.App');
    if (this.state.darkMode) {
      app.classList.add('dark-mode');
      this.setState({ darkModeIcon: <Moon ref={this.svgRef} /> });
    }
  }

  // for small screens
  toggleNav() {
    const navList = document.querySelector('.Navbar__list');
    navList.classList.toggle('active');

    navList.classList.contains('active')
      ? this.setState({ navIcon: 'times' })
      : this.setState({ navIcon: 'bars' });
    //toggle overlay
    const overlay = this.overlayRef.current;
    overlay.classList.toggle("overlayActive");
  }

  toggleDarkMode() {
    this.setState(
      {
        darkMode: !this.state.darkMode
      },
      () => window.localStorage.setItem('darkMode', JSON.stringify(this.state.darkMode))
    );

    this.setDarkModeIcon();
  }

  setDarkModeIcon() {
    const app = document.querySelector('.App');
    if (!this.state.darkMode) {
      app.classList.add('dark-mode');
      this.setState({ darkModeIcon: <Moon ref={this.svgRef} /> });
    } else {
      app.classList.remove('dark-mode');
      this.setState({ darkModeIcon: <Sun ref={this.svgRef} /> });
    }
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
      <div>
        <div ref={this.overlayRef} className="Overlay"
          onClick={this.toggleNav}>
        </div>
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
              <source srcSet={logo} media="(max-width: 600px)" />
              <img className="Navbar__logo" src={logoLg} alt="logo" />
            </picture>
          </Link>

          {/* for hamburger */}
          <button className="toggle-nav" onClick={this.toggleNav}>
            <i className={`fas fa-${this.state.navIcon}`}></i>
          </button>

          <ul className="Navbar__list">
            {navLinks}
            <li>
              <button
                className="btn-dark-mode"
                onClick={this.toggleDarkMode}
                aria-label="Toggle Dark Mode"
              >
                {this.state.darkModeIcon}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
