import React from 'react';
import '../listings/listings.scss';

import { StarSaved, Money, Location, Timer } from '../images';

export default function apply() {
  return (
    <section>
      <div className="listing__card listing__card--apply">
        <header className="listing__header">
          <h1 className="listing__title">Regulatory Affairs Senior Manager</h1>
          <img className="listing__saved" src={StarSaved} alt="" />
          <p className="listing__company">
            Posted by <span>Koco Media</span>
          </p>
        </header>

        <ul className="listing__items">
          <li>
            <img src={Money} alt="" />
            <b>Salary negotiable</b>
          </li>
          <li>
            <img src={Location} alt="" />
            Heyes, <b>Uxbridge</b>
          </li>
          <li>
            <img src={Timer} alt="" />
            Contract, full-time
          </li>
        </ul>

        <div className="form">
          <input className="form__btn" type="submit" value="Apply now" />
        </div>
      </div>

      <div className="listing__more">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae
          delectus culpa dolore sequi debitis eligendi veniam reprehenderit,
          deleniti voluptate perferendis consectetur quibusdam iure suscipit,
          quaerat quia, natus eum vel.
        </p>

        <h1>Required skills</h1>

        <ul className="listing__skills">
          <li>salesforce</li>
          <li>SFDC</li>
          <li>Development</li>
          <li>Development</li>
          <li>Development</li>
          <li>Development</li>
          <li>Development</li>
          <li>Development</li>
          <li>Development</li>
        </ul>
      </div>

      <div className="form">
        <input className="form__btn" type="submit" value="Apply now" />
      </div>
    </section>
  );
}
