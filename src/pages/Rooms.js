import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Banner from '../components/Banner';

export default function Rooms() {
  return (
    <Header header="Header__rooms">
      <Banner title="our rooms">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Header>
  );
}
