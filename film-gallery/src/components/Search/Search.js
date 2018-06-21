import React, { Component } from 'react';

import './Search.scss';

class Search extends Component {
    state = {
        inputText: '',
        parameter: ''
    };

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className='app__header-search'>
                <p className='header-search__label'>find your movie</p>
                <form onSubmit={this.handleSubmit}>
                    <input className='header-search__input' name='filter' />
                    <div className='header-search__controls-container'>
                        <div className='controls-container__filters'>
                            <span className='filters__label'>search by</span>
                            <label className='filters__option'>
                                <input type='radio' value='title' name='filter' />
                                title
                            </label>
                            <label className='filters__option'>
                                <input type='radio' value='director' name='filter' />
                                director
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

export { Search };
