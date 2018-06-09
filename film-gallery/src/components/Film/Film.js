import React from 'react';

import './Film.scss';

export const Film = (props) => (
    <div className='films-container__film'>
        <img
            className='film__cover'
            src={require('../../image.png')}
            alt='film cover'
        />
        <div className='film__main-info'>
            <p className='main-info__title'>{ props.title }</p>
            <div className='main-info__year'>{ props.year }</div>
        </div>
        <p className='film__category'>{ props.type }</p>
    </div>
);
