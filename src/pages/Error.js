import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Banner from '../components/Banner';

export default function Error() {
  return (
    <Header>
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Header>
  );
}
