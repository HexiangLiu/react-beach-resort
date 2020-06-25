import React, { Component } from 'react';
import { RoomContext } from '../context';

import Loading from './Loading';
import Room from './Room';

import './FeaturedRooms.scss';

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { loading, featuredRooms: rooms } = this.context;

    return (
      <section className="featured">
        <h2 className="heading--2">featured rooms</h2>

        <div className="featured__detail">
          {rooms.map((room) => (
            <Room key={room.id} room={room} />
          ))}
          {loading && <Loading />}
        </div>
      </section>
    );
  }
}
