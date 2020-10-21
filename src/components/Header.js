import React, { Component } from 'react';
import './Header.scss';
// import headerBg from '../img/svg/header-bg.svg';
// import { ReactComponent as SubHeader } from '../img/svg/sub-header.svg';
import { ReactComponent as HeaderBg } from '../img/svg/header-bg.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.svgRef = React.createRef(); // to access the SVG el in the render
  }

  // add style to each svg path
  // componentDidMount() {
  //   const path = document.getElementsByClassName('path');

  //   let delay = 1;
  //   for (let i = 0; i < path.length; i++) {
  //     this.svgRef.current.children[i].classList.add('path-stroke');
  //     this.svgRef.current.children[i].style.animationDelay = `${delay}s`;
  //     delay += 0.1;
  //   }
  // }

  // add style to each svg group
  componentDidMount() {
    const bgGroup = document.getElementsByClassName('bg-group');
    console.log(bgGroup);
  }

  render() {
    return (
      <header className="Header">
        <HeaderBg ref={this.svgRef} />
        {/* <SubHeader ref={this.svgRef} /> */}

        <h1 className="Header__heading">Michelle Racho</h1>
        <p className="Header__sub-heading">A developer with an appreciation for design</p>
        <a className="cta" href="#about">
          Learn more
        </a>
      </header>
    );
  }
}

export default Header;
