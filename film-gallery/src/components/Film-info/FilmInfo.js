import React from 'react';

import './FilmInfo.scss';

export const FilmInfo = () => (
    <div className='app__header-details'>
        <div className='details__film-cover'>
            <img src={require('../../image.png')} alt='film cover' />
        </div>
        <div className='details__info'>
            <div className='info__main-info'>
                <div>
                    <p className='main-info__film-name'>some film name</p>
                    <p className='main-info__subtitle'>some film subtitle</p>
                </div>
                <div className='main-info__rating'>4.1</div>
            </div>
            <div className='info__figures'>
                <span className='figures__year'>1994</span>
                <span className='figures__duration'>154 min</span>
            </div>
            <p className='info__description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
            </p>
            <p className='info__director'>some film director</p>
            <p className='info__actors'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </div>
);
