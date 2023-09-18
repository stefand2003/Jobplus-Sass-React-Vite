import React from 'react';
import '../styles/form.scss';

export default function profile() {
  return (
    <div class="form form--page">
      <div class="form__group form__group--page">
        <label class="form__label">Desired job title</label>
        <input
          class="form__field"
          type="text"
          placeholder="Desired job title"
        />
      </div>

      <div class="form__group form__group--page">
        <label class="form__label">Min per annum salary</label>
        <input
          class="form__field"
          type="text"
          placeholder="Min per annum salary"
        />
      </div>

      <div class="form__group form__group--page">
        <label class="form__label">Job type</label>
        <p class="form__checkbox">
          <input type="checkbox" /> Permanent
        </p>
        <p class="form__checkbox">
          <input type="checkbox" /> Temporary
        </p>
        <p class="form__checkbox">
          <input type="checkbox" /> Contract
        </p>
      </div>

      <div class="form__group form__group--page">
        <label class="form__label">Sector</label>
        <br />
        <select class="form__select">
          <option selected="selected">Choose a sector</option>
          <option>Technology</option>
          <option>Engineering</option>
          <option>Health</option>
        </select>
      </div>

      <div class="form__group form__group--page">
        <label class="form__label">Experience</label>
        <br />
        <textarea class="form__textarea"></textarea>
      </div>

      <div class="form__group form__group--page">
        <input class="form__btn" type="submit" value="Submit" />
      </div>
    </div>
  );
}
