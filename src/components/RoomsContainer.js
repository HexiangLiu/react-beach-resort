import React from 'react';

import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

import { RoomConsumer } from '../context';
import Loading from './Loading';

import './RoomsContainer.scss';

export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        const { loading, sortedRooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div className="rooms-container">
            <h2 className="heading--2">search rooms</h2>
            <RoomsFilter />
            <RoomsList sortedRooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
