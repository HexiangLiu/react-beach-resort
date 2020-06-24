import React from 'react';

import './Header.scss';

export default function Header({ children, header }) {
  return <header className={`Header ${header}`}>{children}</header>;
}

Header.defaultProps = {
  header: 'Header__default',
};
