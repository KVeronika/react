import React, { Component } from 'react';

import './FilterInfo.scss';

class FilterInfo extends Component {
  render() {
    return (
      <div className="header__filter-info">
        <div className="filter-info__results-founded">
          <span className="results-founded__count">7</span>
          <span className="results-founded__label">movies found</span>
        </div>
        <div className="filter-info__sorting-options">
          <span>Sort by</span>
          <label className="sorting-options__option">
            <input type="radio" value="date" name="sort" />
            release date
          </label>
          <label className="sorting-options__option">
            <input type="radio" value="rating" name="sort" />
            rating
          </label>
        </div>
      </div>
    );
  }
}

export { FilterInfo };
