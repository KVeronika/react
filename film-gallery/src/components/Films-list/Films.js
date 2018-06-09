import React, { Component } from 'react';

import { Film } from '../../components';

import './Films.scss';

class FilmsList extends Component {
  render() {
    return (
      <div className='app__films-container'>
        <Film title='first film' year='2004' type='some type'/>
        <Film title='first film' year='2004' type='some type'/>
        <Film title='first film' year='2004' type='some type'/>
        <Film title='first film' year='2004' type='some type'/>
      </div>
    );
  }
}

export { FilmsList };
