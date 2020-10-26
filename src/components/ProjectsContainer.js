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
        prevLink: 'https://www.michelleracho.com/',
        sourceLink: 'https://github.com/michelleracho/my-website-v2'
      },
      {
        title: 'Todo List',
        img: placeholderIcon,
        description: 'The classic project favorite',
        tech: ['HTML', 'CSS', 'React'],
        prevLink: '#',
        sourceLink: 'https://github.com/michelleracho/react-todo-list'
      },
      {
        title: 'Sound App',
        img: placeholderIcon,
        description:
          'A Patatap clone using JavaScript libraries; Paper.js for the animations and Howler.js for the sounds',
        tech: ['HTML', 'CSS', 'JavaScript'],
        prevLink: 'https://awesome-brahmagupta-145126.netlify.app/',
        sourceLink: 'https://github.com/michelleracho/sound-app'
      }
    ]
  };

  render() {
    const projectList = this.props.projects.map(proj => (
      <li key={proj.name}>
        <Project
          title={proj.title}
          img={proj.img}
          description={proj.description}
          tech={proj.tech.map(t => (
            <li>{t}</li>
          ))}
          prevLink={proj.prevLink}
          sourceLink={proj.sourceLink}
        />
      </li>
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
