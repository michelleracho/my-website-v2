import React, { Component } from 'react';
import { displayList } from './helpers';
import './Contact.scss';

class Contact extends Component {
  static defaultProps = {
    contact: [
      { label: 'Email', link: 'michelleangela.racho@gmail.com', icon: 'temp' },
      { label: 'Github', link: 'https://github.com/michelleracho', icon: 'devicon-github-plain' },
      {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/michelle-angela-racho/',
        icon: 'devicon-linkedin-plain'
      },
      {
        label: 'Twitter',
        link: 'https://twitter.com/michelleracho_',
        icon: 'devicon-twitter-plain'
      }
    ]
  };

  render() {
    return (
      <section className="Contact" id="contact">
        <h1 className="section-title">Contact</h1>
        <ul className="Contact__list">{displayList(this.props.contact, 'Contact')}</ul>
      </section>
    );
  }
}

export default Contact;
