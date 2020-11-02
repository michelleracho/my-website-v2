import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Navbar.scss';
import logo from '../img/svg/logo.svg';
import logoLg from '../img/svg/logo-lg.svg';
import { ReactComponent as Sun } from '../img/svg/sun.svg';
import { ReactComponent as Moon } from '../img/svg/moon.svg';

const maxWidth = '600px';

class Navbar extends Component {
  static defaultProps = {
    links: ['About', 'Skills', 'Projects', 'Contact']
  };

  constructor(props) {
    super(props);
    this.state = {
      navIcon: 'bars',
      darkMode: JSON.parse(window.localStorage.getItem('darkMode') || 'false'),
      darkModeIcon: <Sun ref={this.svgRef} />,
      matches: window.matchMedia(`(max-width: ${maxWidth})`).matches
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

    const handler = e => this.setState({ matches: e.matches });
    window.matchMedia(`(max-width: ${maxWidth})`).addListener(handler);
  }

  componentDidUpdate() {
    const navList = document.querySelector('.Navbar__list');
    const overlay = this.overlayRef.current;

    // handle overlay issue when resizing screen
    if (this.state.matches === false && overlay.classList.contains('overlayActive')) {
      overlay.classList.remove('overlayActive');
    }

    if (this.state.matches && navList.classList.contains('active')) {
      overlay.classList.add('overlayActive');
    }
  }

  // for small screens
  toggleNav() {
    const navList = document.querySelector('.Navbar__list');
    const overlay = this.overlayRef.current;

    // only toggle hamburger and overlay if screensize = maxWidth
    if (this.state.matches) {
      navList.classList.toggle('active');
      overlay.classList.toggle('overlayActive');
    }

    navList.classList.contains('active')
      ? this.setState({ navIcon: 'times' })
      : this.setState({ navIcon: 'bars' });
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
        <div ref={this.overlayRef} className="Overlay" onClick={this.toggleNav}></div>

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
              <source srcSet={logo} media={`(max-width: ${maxWidth})`} />
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
