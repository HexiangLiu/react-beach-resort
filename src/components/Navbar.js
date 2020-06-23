import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';

//images
import logo from '../images/logo.svg';

//SCSS
import './Navbar.scss';

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="nav">
        <div className="nav__center">
          <div className="nav__header">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <button
              className="nav__btn"
              type="button"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav__icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? 'nav__links show' : 'nav__links'}>
            <li className="nav__item">
              <Link className="nav__link" to="/">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/rooms">
                Rooms
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
