import React from 'react';

import { RoomConsumer } from '../context';

import './RoomsFilter.scss';

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter() {
  return (
    <RoomConsumer>
      {(value) => {
        const {
          rooms,
          handleChange,
          type,
          capacity,
          price,
          minSize,
          maxSize,
          minPrice,
          maxPrice,
          breakfast,
          pets,
        } = value;

        // get all types
        let types = getUnique(rooms, 'type');

        types = ['all', ...types];

        // get all capacity
        const guests = getUnique(rooms, 'capacity');

        return (
          <section className="roomfilter">
            <div className="roomfilter__type">
              <label htmlFor="type">room type</label>
              <select
                name="type"
                value={type}
                onChange={handleChange}
                id="type"
              >
                {types.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="roomfilter__capacity">
              <label htmlFor="capacity">guests</label>
              <select
                name="capacity"
                value={capacity}
                onChange={handleChange}
                id="capacity"
              >
                {guests.map((guest, index) => (
                  <option key={index} value={guest}>
                    {guest}
                  </option>
                ))}
              </select>
            </div>
            <div className="roomfilter__price">
              <label htmlFor="price">room price ${price}</label>
              <input
                id="price"
                type="range"
                name="price"
                value={price}
                max={maxPrice}
                min={minPrice}
                onChange={handleChange}
              />
            </div>
            <div className="roomfilter__size">
              <label htmlFor="size">room size sqft</label>
              <input
                id="size"
                type="number"
                name="minSize"
                value={minSize}
                onChange={handleChange}
              />
              <input
                id="size"
                type="number"
                name="maxSize"
                value={maxSize}
                onChange={handleChange}
              />
            </div>
            <div className="roomfilter__extra">
              <label htmlFor="breakfast">breakfast</label>
              <input
                id="breakfast"
                type="checkbox"
                name="breakfast"
                onChange={handleChange}
                checked={breakfast}
              />
              <label htmlFor="pets">pets</label>
              <input
                id="pets"
                type="checkbox"
                name="pets"
                onChange={handleChange}
                checked={pets}
              />
            </div>
          </section>
        );
      }}
    </RoomConsumer>
  );
}
