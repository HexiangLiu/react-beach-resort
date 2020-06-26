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
    console.log(room);
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

    return (
      <div>
        <StyledHeader img={images[0]}>
          <Banner title={name}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHeader>
      </div>
    );
  }
}
