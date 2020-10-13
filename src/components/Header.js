import React, { Component } from 'react';
import './Header.scss';
// import headerBg from '../img/svg/header-bg.svg';
import { ReactComponent as SubHeader } from '../img/svg/sub-header.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.svgRef = React.createRef(); // to access the SVG el in the render
  }

  // add style to each svg path
  componentDidMount() {
    const path = document.getElementsByClassName('path');

    let delay = 1;
    for (let i = 0; i < path.length; i++) {
      this.svgRef.current.children[i].classList.add('path-stroke');
      this.svgRef.current.children[i].style.animationDelay = `${delay}s`;
      delay += 0.1;
    }
  }

  render() {
    return (
      <header className="Header">
        <h1 className="Header__heading">Michelle Racho</h1>
        <SubHeader ref={this.svgRef} />

        <a className="cta" href="#about">
          Learn more
        </a>
      </header>
    );
  }
}

export default Header;
