import React from 'react';
import PropTypes from 'prop-types';

import './Film.scss';

const Film = props => (
    <div className='films-container__film'>
        <img className='film__cover' alt='film cover' src={props.image} />
        <div className='film__main-info'>
            <p className='main-info__title'>{props.title}</p>
            <div className='main-info__year'>{props.year}</div>
        </div>
        <p className='film__category'>{props.type}</p>
    </div>
);

Film.propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string
};

export { Film };
