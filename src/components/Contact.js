import React, { Component } from 'react';
import { displayList } from './helpers';
import './Contact.scss';

class Contact extends Component {
  static defaultProps = {
    contact: [
      {
        label: 'Email',
        link: 'mailto:michelleangela.racho@gmail.com',
        icon: 'fas fa-envelope-square'
      },
      { label: 'Github', link: 'https://github.com/michelleracho', icon: 'fab fa-github' },
      {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/michelle-angela-racho/',
        icon: 'fab fa-linkedin'
      },
      {
        label: 'Twitter',
        link: 'https://twitter.com/michelleracho_',
        icon: 'fab fa-twitter'
      }
    ]
  };

  render() {
    return (
      <section className="Contact" id="contact">
        <h2 className="section-title" data-title="Contact">
          Contact
        </h2>

        <ul className="Contact__list">{displayList(this.props.contact, 'Contact')}</ul>
      </section>
    );
  }
}

export default Contact;
