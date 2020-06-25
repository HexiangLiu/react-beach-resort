import React from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import './Services.scss';

export default function Services() {
  const services = [
    {
      icon: <FaCocktail />,
      title: 'Free Cocktail',
      info:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, illo!',
    },
    {
      icon: <FaHiking />,
      title: 'Endless Hiking',
      info:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, illo!',
    },
    {
      icon: <FaShuttleVan />,
      title: 'Free shuttle',
      info:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, illo!',
    },
    {
      icon: <FaBeer />,
      title: 'Strongest Beer',
      info:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, illo!',
    },
  ];

  return (
    <div className="services">
      <h2 className="heading--2">services</h2>

      <div className="services__detail">
        {services.map((service, index) => {
          return (
            <article className="service" key={index}>
              <span className="service__icon">{service.icon}</span>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__info">{service.info}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
