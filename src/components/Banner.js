import React from 'react';

import './Banner.scss';

export default function Banner({ title, subtitle, children }) {
  return (
    <div className="banner">
      <h1 className="heading--1">{title}</h1>
      <h3 className="heading--3">{subtitle}</h3>
      {children}
    </div>
  );
}
