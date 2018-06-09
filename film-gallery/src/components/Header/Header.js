import React from 'react';

import { FilterInfo }  from '../../components';

import './Header.scss';

export const Header = props => (
  <div>
    <header className='app__header'>
      <div className='app__header-title'>
        <div className='header-title__label'>netflixroulette</div>
        <div className='header-title__search-button'>
          <button>Search</button>
        </div>
      </div>
      { props.children }
    </header>
    <FilterInfo />
  </div>
);
