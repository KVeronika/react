import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Film } from '../../components';

import './Films.scss';

const mapStateToProps = (state) => ({
    films: state.films.filmList
});

class FilmsList extends Component {
    render() {
        let content;

        if (this.props.films.length === 0) {
            content = 'NoFilms';
        } else {
            content = this.props.films.map((film) => {
                return (<Film
                    key={film.id}
                    title={film.name}
                    year={film.releaseDate}
                    type={film.genres.join(', ')}
                    image={film.images ? film.images.medium : require('../../image.png')}/>);
            });
        }

        return (
            <div className='app__films-container'>{content}</div>
        );
    }
}

FilmsList.propTypes =  {
    films: PropTypes.array.isRequired
};

const WrapperFilmsList = connect(mapStateToProps, null)(FilmsList);

export { WrapperFilmsList as FilmsList };
