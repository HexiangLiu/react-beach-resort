import React from 'react';

import arrow from '../images/gif/loading-arrow.gif';

export default function Loading() {
  return (
    <div className="loading">
      <h4 className="heading--3">rooms data loading...</h4>
      <img src={arrow} alt="loading" />
    </div>
  );
}
