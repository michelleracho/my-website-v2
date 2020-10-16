import React, { Component } from 'react';
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

  showList(arr) {
    const list = [];
    for (let item of arr) {
      list.push(
        <li key={item.label} className="Contact__item">
          <i className={item.icon}></i>
          {item.label}
        </li>
      );
    }
    return list;
  }

  render() {
    return (
      <section className="Contact">
        <h1 className="section-title">Contact</h1>
        <ul className="Contact__list">{this.showList(this.props.contact)}</ul>
      </section>
    );
  }
}

export default Contact;
