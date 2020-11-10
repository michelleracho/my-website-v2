import React, { Component } from 'react';
import Project from './Project';
import './ProjectsContainer.scss';

import soundAppImg from '../img/projects/sound-app.png';
import imageGalleryImg from '../img/projects/image-gallery.png';
import todoListImg from '../img/projects/todo-list.png';
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
        title: 'Todo List',
        img: todoListImg,
        description: 'The classic project favorite with the addition of utilizing local storage',
        tech: ['HTML', 'CSS', 'React'],
        previewUrl: 'https://mracho-todo-list.netlify.app/',
        sourceUrl: 'https://github.com/michelleracho/react-todo-list'
      },
      {
        title: 'KR Typing Game',
        img: krTypingImg,
        description:
          'Get familiar with the Korean keyboard layout while learning some Korean vocabulary',
        tech: ['HTML', 'SCSS', 'JavaScript'],
        previewUrl: 'https://mracho-kr-typing.netlify.app/',
        sourceUrl: 'https://github.com/michelleracho/typing-game'
      },
      {
        title: 'Sound App',
        img: soundAppImg,
        description: 'A Patatap clone using JavaScript libraries',
        tech: ['HTML', 'CSS', 'JavaScript', 'Paper.js', 'Howler.js'],
        previewUrl: 'https://mracho-sound-app.netlify.app/',
        sourceUrl: 'https://github.com/michelleracho/sound-app'
      },
      {
        title: 'Image Gallery',
        img: imageGalleryImg,
        description: 'Instagram profile page clone using CSS grid',
        tech: ['HTML', 'Scss'],
        previewUrl: 'https://mracho-image-gallery.netlify.app/',
        sourceUrl: 'https://github.com/michelleracho/image-gallery'
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
