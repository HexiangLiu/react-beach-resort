import React from 'react';

import Room from './Room';

import './RoomsList.scss';

export default function RoomsList({ sortedRooms }) {
  if (sortedRooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>sorry no rooms matched your search parameter</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist__container">
        {sortedRooms.map((room) => {
          return <Room room={room} key={room.id} />;
        })}
      </div>
    </section>
  );
}
