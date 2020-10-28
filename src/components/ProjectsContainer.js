import React, { Component } from 'react';
import Project from './Project';
import './ProjectsContainer.scss';
// import placeholderIcon from '../img/svg/icon.svg';
import soundAppImg from '../img/projects/sound-app.png';
import imageGalleryImg from '../img/projects/image-gallery.png';
import todoListImg from '../img/projects/todo-list.png';
import portfolioImg from '../img/projects/portfolio.png';

class ProjectsContainer extends Component {
  static defaultProps = {
    projects: [
      {
        title: 'Portfolio Website',
        img: portfolioImg,
        description: 'Designed and developed this website to showcase my skills as a developer.',
        tech: ['HTML', 'Scss', 'React', 'React Router', 'Adobe XD'],
        previewUrl: 'https://www.michelleracho.com/',
        sourceUrl: 'https://github.com/michelleracho/my-website-v2'
      },
      {
        title: 'Todo List',
        img: todoListImg,
        description: 'The classic project favorite with the addition of utilizing local storage',
        tech: ['HTML', 'CSS', 'React'],
        previewUrl: 'https://zen-lamarr-96a4de.netlify.app/',
        sourceUrl: 'https://github.com/michelleracho/react-todo-list'
      },
      {
        title: 'Sound App',
        img: soundAppImg,
        description: 'A Patatap clone using JavaScript libraries',
        tech: ['HTML', 'CSS', 'JavaScript', 'Paper.js', 'Howler.js'],
        previewUrl: 'https://awesome-brahmagupta-145126.netlify.app/',
        sourceUrl: 'https://github.com/michelleracho/sound-app'
      },
      {
        title: 'Image Gallery',
        img: imageGalleryImg,
        description: 'Instagram profile page clone using CSS grid',
        tech: ['HTML', 'Scss'],
        previewUrl: 'https://dreamy-dubinsky-4414a3.netlify.app/',
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
