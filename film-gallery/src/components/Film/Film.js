import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Film.scss';

const Film = props => (
    <Link to={{ pathname: `/film/${props.id}` }}>
        <div className='films-container__film'>
            <img className='film__cover' alt='film cover' src={props.image} />
            <div className='film__main-info'>
                <p className='main-info__title'>{props.title}</p>
                <div className='main-info__year'>{props.year}</div>
            </div>
            <p className='film__category'>{props.type}</p>
        </div>
    </Link>
);

Film.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export { Film };
