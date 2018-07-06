import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { fetchFilmInfo } from '../../modules/Film/actions';

import './FilmInfo.scss';

const mapStateToProps = (state) => ({
    film: state.film.film
});

const mapDispatchToProps = (dispatch) => ({
    fetchFilmInfo: dispatch(fetchFilmInfo)
});

class FilmInfo extends Component {
    componentDidMount() {
        this.props.fetchFilmInfo(this.props.match.params.id);
    }

    render() {
        if (this.props.film) {
            return (
                <div className='app__header-details'>
                    <div className='details__film-cover'>
                        <img
                            src={this.props.film.image ? this.props.film.image : require('../../image.png')}
                            alt='film cover' />
                    </div>
                    <div className='details__info'>
                        <div className='info__main-info'>
                            <div>
                                <p className='main-info__film-name'>{this.props.film.name}</p>
                                <p className='main-info__genres'>
                                    {this.props.film.genres ? this.props.film.genres.join(', ') : ''}
                                </p>
                            </div>
                            <div className='main-info__rating'>{this.props.film.rating}</div>
                        </div>
                        <div className='info__figures'>
                            <span className='figures__year'>{this.props.film.releaseDate}</span>
                            <span className='figures__duration'>{this.props.film.runtime} min</span>
                        </div>
                        <p className='info__description'>{this.props.film.summary}</p>
                        <p className='info__tagline'>Tagline: {this.props.film.tagline}</p>
                        <p className='info__budget'>Budget: {this.props.film.budget}$</p>
                    </div>
                </div>
            );
        }

        return null;
    }
}

FilmInfo.propTypes = {
    fetchFilmInfo: PropTypes.func.isRequired,
    film: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        tagline: PropTypes.string,
        rating: PropTypes.number,
        releaseDate: PropTypes.number,
        runtime: PropTypes.number,
        summary: PropTypes.string,
        budget: PropTypes.number,
        genres: PropTypes.arrayOf(PropTypes.string)
    }),
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    })
};

const WrappedFilmInfo = withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmInfo));

export { WrappedFilmInfo as FilmInfo };
