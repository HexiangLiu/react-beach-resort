import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import defaultImg from '../images/room-1.jpeg';

import './Room.scss';

export default function Room({ room }) {
  const { images, name, price, slug } = room;
  return (
    <article className="room">
      <img
        className="room__img"
        src={images[0] || defaultImg}
        alt="single room"
      />
      <div className="room__price">
        <h6>${price}</h6>
        <p>per night</p>
      </div>
      <Link to={`/rooms/${slug}`} className="btn-primary room__redirect">
        feature
      </Link>
      <h3 className="room__name ">{name}</h3>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
