import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from './helpers';
import { ReactComponent as HeaderBgLg } from '../img/svg/header-bg-lg.svg';
import { ReactComponent as HeaderBgMd } from '../img/svg/header-bg-md.svg';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // media query in React
      matches: window.matchMedia('(min-width: 768px)').matches
    };
    this.svgRef = React.createRef(); // to access the SVG el in the render
  }

  componentDidMount() {
    const handler = e => this.setState({ matches: e.matches });
    window.matchMedia('(min-width: 768px)').addListener(handler);
  }

  render() {
    // set bg based on screen size
    let headerBg = this.state.matches ? (
      <HeaderBgLg ref={this.svgRef} />
    ) : (
      <HeaderBgMd ref={this.svgRef} />
    );

    return (
      <header className="Header" id="home">
        {headerBg}

        <h1 className="Header__heading">Michelle Racho</h1>
        <p className="Header__sub-heading">A developer with an appreciation for design</p>

        <HashLink className="cta" smooth scroll={scrollWithOffset} to="#about">
          Learn more
        </HashLink>
      </header>
    );
  }
}

export default Header;
