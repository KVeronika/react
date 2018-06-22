import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchFilmsList } from '../../modules/Films/actions';

import './Search.scss';

const mapDispatchToProps = dispatch => ({
    fetchFilms: dispatch(fetchFilmsList)
});

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.fetchFilms(this.state.inputText);
    }

    handleInput = (event) => {
        this.setState({
            inputText: event.target.value
        });
    }

    render() {
        return (
            <div className='app__header-search'>
                <p className='header-search__label'>find your movie</p>
                <form onSubmit={this.handleSubmit}>
                    <input className='header-search__input' name='filter' onInput={this.handleInput} />
                    <div className='header-search__controls-container'>
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
