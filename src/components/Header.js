import React, { Component } from 'react';
import './Header.scss';
// import headerBg from '../img/svg/header-bg.svg';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1 className="Header__heading">Michelle Racho</h1>
        <h2 className="Header__sub-heading">A developer with an appreciation for design</h2>
        <a className="cta" href="#about">
          Learn more
        </a>
      </header>
    );
  }
}

export default Header;
