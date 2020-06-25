import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeatureRooms from '../components/FeaturedRooms';

export default function Home() {
  return (
    <>
      <Header>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Header>
      <Services />
      <FeatureRooms />
    </>
  );
}
