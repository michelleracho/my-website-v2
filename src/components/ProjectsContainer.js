import React, { Component } from 'react';
import Project from './Project';
import './ProjectsContainer.scss';

import portfolioImg from '../img/projects/portfolio.png';
import spacexImg from '../img/projects/spacex-explorer.png';
import krTypingImg from '../img/projects/kr-typing.png';

class ProjectsContainer extends Component {
  static defaultProps = {
    projects: [
      {
        title: 'Portfolio Website',
        img: portfolioImg,
        description: 'Designed and developed this website to showcase my skills as a developer',
        tech: ['HTML', 'Scss', 'React', 'Adobe XD'],
        previewUrl: 'https://www.michelleracho.com/',
        sourceUrl: 'https://github.com/michelleracho/my-website-v2'
      },
      {
        title: 'SpaceX Explorer',
        img: spacexImg,
        description: 'Log in to see space launches data from the SpaceX API',
        tech: ['HTML', 'React', 'Styled Components', 'Figma'],
        previewUrl: 'https://mracho-spacex-explorer.netlify.app/',
        sourceUrl: 'https://github.com/michelleracho/react-spacex-explorer'
      },
      {
        title: 'KR Typing Game',
        img: krTypingImg,
        description: 'Get familiar with the Korean keyboard layout while learning some vocabulary',
        tech: ['HTML', 'SCSS', 'JavaScript'],
        previewUrl: 'https://mracho-kr-typing.netlify.app/',
        sourceUrl: 'https://github.com/michelleracho/typing-game'
      }
    ]
  };

  render() {
    const projectList = this.props.projects.map(proj => (
      <Project
        key={proj.title}
        title={proj.title}
        img={proj.img}
        description={proj.description}
        tech={proj.tech.map((t, idx) => (
          <li key={idx}>{t}</li>
        ))}
        previewUrl={proj.previewUrl}
        sourceUrl={proj.sourceUrl}
      />
    ));

    return (
      <section className="ProjectsContainer" id="projects">
        <h2 className="section-title" data-title="Projects">
          Things I worked on
        </h2>

        <ul className="ProjectsContainer__list">{projectList}</ul>
      </section>
    );
  }
}

export default ProjectsContainer;
