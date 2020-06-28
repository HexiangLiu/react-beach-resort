import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';

import StyledHeader from '../components/StyledHeader';
import Banner from '../components/Banner';

import './SingleRoom.scss';

export default class SingleRoom extends Component {
  static contextType = RoomContext;

  state = { slug: this.props.match.params.slug };

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3 className="heading--1">no such room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    const [mainImg, ...restImg] = images;

    return (
      <>
        <StyledHeader img={mainImg}>
          <Banner title={name}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHeader>
        <section className="single-room">
          <div className="single-room__images">
            {restImg.map((img, index) => (
              <img key={index} src={img} alt={name} />
            ))}
          </div>
          <div className="single-room__info">
            <article className="single-room__description">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="single-room__detail">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :{' '}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? `pets allowed` : ` no pets allowed`}</h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul>
            {extras.map((extra, index) => (
              <li key={index}>{extra}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
