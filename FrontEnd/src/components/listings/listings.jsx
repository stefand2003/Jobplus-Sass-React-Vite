import React from 'react';
import './listings.scss';

import Paginate from '../paginate/paginate';

import { StarSaved, Money, Location, Timer } from '../images';

export default function listings() {
  return (
    <section>
      <a href="apply.html">
        <div class="listing__card">
          <header class="listing__header">
            <h1 class="listing__title">Regulatory Affairs Senior Manager</h1>
            <img class="listing__saved" src={StarSaved} alt="" />
            <p class="listing__company">
              Posted by <span>Koco Media</span>
            </p>
          </header>

          <ul class="listing__items">
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

          <p class="listing__detail">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo,
            asperiores ullam minus at <b>Read more...</b>
          </p>

          <a href="" class="listing__cta">
            Withdraw application
          </a>
        </div>
      </a>
      <Paginate />
    </section>
  );
}
