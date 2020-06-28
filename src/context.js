import React, { Component } from 'react';

import Client from './Contentful';

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  //Fetch Data from contentful
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'beachResortReact',
        order: 'fields.price',
      });

      const rooms = this.formatData(response.items);
      const featuredRooms = rooms.filter((room) => room.featured === true);
      const maxPrice = Math.max(...rooms.map((room) => room.price));
      const maxSize = Math.max(...rooms.map((room) => room.size));

      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  //Controll input
  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(target.type, name, value);
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  //filter data
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    // all the rooms
    let tempRooms = [...rooms];

    // convert string to number
    capacity = parseInt(capacity);
    minSize = parseInt(minSize);
    maxSize = parseInt(maxSize);

    // filter by type
    if (type !== 'all') {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    // filter by capacity
    tempRooms = tempRooms.filter((room) => room.capacity >= capacity);

    //filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);

    //filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    this.setState({ sortedRooms: tempRooms });
  };

  //format data
  formatData(items) {
    const tempItems = items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((image) => image.fields.file.url);
      const room = { ...item.fields, images, id };

      return room;
    });

    return tempItems;
  }

  getRoom = (slug) => {
    const room = this.state.rooms.find((room) => room.slug === slug);
    return room;
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer };
