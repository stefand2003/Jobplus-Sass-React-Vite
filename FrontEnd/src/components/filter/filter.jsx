import React from 'react';
import './filter.scss';

export default function filter() {
  return (
    <div className="filter">
      <div className="filter__links">
        <h1>Browse by sector</h1>
        <ul>
          <li>
            Technology <span>(14)</span>
          </li>
          <li>
            Engineering <span>(200)</span>
          </li>
          <li>
            Health <span>(13)</span>
          </li>
        </ul>
      </div>

      <div className="filter__links">
        <h1>Browse by location</h1>
        <ul>
          <li>
            Jobs in London <span>(14)</span>
          </li>
          <li>
            Jobs in West Midlands <span>(200)</span>
          </li>
          <li>
            Jobs in Yorkshire <span>(13)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
