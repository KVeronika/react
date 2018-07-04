import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { Film } from '../../components';

import './Films.scss';

const mapStateToProps = (state) => ({
    films: state.films.filmList
});

class FilmsList extends Component {
    render() {
        let content;

        if (this.props.match.path.search(/\/film/) < 0) {
            if (this.props.films.length === 0) {
                content = (<div className='films-container__no-films'>
                    <span className='no-films__label'>No films found</span>
                </div>);
            } else {
                content = this.props.films.map((film) => {
                    return (<Film
                        key={film.id}
                        id={film.id}
                        title={film.name}
                        year={film.releaseDate}
                        type={film.genres.join(', ')}
                        image={film.image ? film.image : require('../../image.png')} />);
                });
            }
        }

        return (
            <div className='app__films-container'>{content}</div>
        );
    }
}

FilmsList.propTypes =  {
    films: PropTypes.array,
    match: PropTypes.shape({
        path: PropTypes.string
    })
};

const WrapperFilmsList = withRouter(connect(mapStateToProps, null)(FilmsList));

export { WrapperFilmsList as FilmsList };
