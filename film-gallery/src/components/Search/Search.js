import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchFilmList } from '../../modules/FilmList/actions';

import './Search.scss';

const mapDispatchToProps = dispatch => ({
    fetchFilms: dispatch(fetchFilmList)
});

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: '',
            filter: 'title'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.fetchFilms({ search: this.state.inputText, searchBy: this.state.filter });
    }

    handleInput = (event) => {
        this.setState({
            inputText: event.target.value
        });
    }

    handleFilterClick = (event) => {
        this.setState({
            filter: event.target.value
        });
    }

    render() {
        return (
            <div className='app__header-search'>
                <p className='header-search__label'>find your movie</p>
                <form onSubmit={this.handleSubmit}>
                    <input className='header-search__input' name='filter' onInput={this.handleInput} />
                    <div className='header-search__controls-container'>
                        <div className='controls-container__filters'>
                            <span className='filters__label'>search by</span>
                            <label
                                className={`filters__option ${this.state.filter === 'title' ?
                                    'option__selected' : ''}`}
                                onClick={this.handleFilterClick}>
                                <input type='radio' value='title' name='filter' />
                                title
                            </label>
                            <label
                                className={`filters__option ${this.state.filter === 'genres' ?
                                    'option__selected' : ''}`}
                                onClick={this.handleFilterClick}>
                                <input type='radio' value='genres' name='filter' />
                                genre
                            </label>
                        </div>
                        <div className='controls-container__submit'>
                            <button className='submit__submit-button'>
                                search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

Search.propTypes = {
    fetchFilms: PropTypes.func.isRequired
};

const WrappedComponent = connect(null, mapDispatchToProps)(Search);

export { WrappedComponent as Search };
