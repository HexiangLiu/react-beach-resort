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
        const { sortedRooms, loading, rooms } = value;
        console.log(sortedRooms, loading);
        if (loading) {
          return <Loading />;
        }
        return (
          <div className="rooms-container">
            Hello from Rooms Container
            <RoomsFilter rooms={rooms} />
            <RoomsList sortedRooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
