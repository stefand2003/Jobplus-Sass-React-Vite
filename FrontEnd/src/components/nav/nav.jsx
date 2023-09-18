import React from 'react';
import { Link } from 'react-router-dom';

import {
  Hamburger,
  Magnify,
  NotifyActive,
  Saved,
  Profile,
  Exit,
} from '../images';

import './nav.scss';

export default function nav() {
  return (
    <nav className="nav">
      <input type="checkbox" className="nav__toggle" id="hamburger" hidden />
      <ul className="nav__lblock">
        <li className="nav__hamburger">
          <label htmlFor="hamburger">
            <img src={Hamburger} alt="" />
          </label>
        </li>
        <li className="nav__logo">
          <Link to="/">JOBPLUS</Link>
        </li>
      </ul>

      <ul className="nav__icons">
        <li>
          <Link to="/listings">
            <img src={Magnify} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/notifications">
            <img src={NotifyActive} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/saved-jobs">
            <img src={Saved} alt="" />
            <span className="nav__savedcount">1</span>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <img src={Profile} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/login">
            <img src={Exit} alt="" />
          </Link>
        </li>
      </ul>

      <ul className="nav__dropl">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/listings">
          <li>Job listing</li>
        </Link>
        <Link to="/applications">
          <li>Job applications</li>
        </Link>
      </ul>
    </nav>
  );
}
