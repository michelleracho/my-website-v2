import React, { Component } from 'react';
import Project from './Project';
import './ProjectsContainer.scss';
import placeholderIcon from '../img/svg/icon.svg';

class ProjectsContainer extends Component {
  static defaultProps = {
    projects: [
      {
        title: 'Portfolio Website',
        img: placeholderIcon,
        description:
          'I personally designed and developed this website with the goal of showcasing my skills as a developer.',
        tech: ['HTML', 'Scss', 'React', 'Adobe XD'],
        previewUrl: 'https://www.michelleracho.com/',
        sourceUrl: 'https://github.com/michelleracho/my-website-v2'
      },
      {
        title: 'Todo List',
        img: placeholderIcon,
        description: 'The classic project favorite with the addition of utilizing local storage',
        tech: ['HTML', 'CSS', 'React'],
        previewUrl: '#',
        sourceUrl: 'https://github.com/michelleracho/react-todo-list'
      },
      {
        title: 'Sound App',
        img: placeholderIcon,
        description:
          'A Patatap clone using JavaScript libraries; Paper.js for the animations and Howler.js for the sounds',
        tech: ['HTML', 'CSS', 'JavaScript'],
        previewUrl: 'https://awesome-brahmagupta-145126.netlify.app/',
        sourceUrl: 'https://github.com/michelleracho/sound-app'
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
          Projects
        </h2>

        <ul className="ProjectsContainer__list">{projectList}</ul>
      </section>
    );
  }
}

export default ProjectsContainer;
