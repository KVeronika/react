import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import './FilterInfo.scss';

const mapStateToProps = (state) => {
    return {
        countOfFound: state.films.filmList ? state.films.filmList.length : 0
    };
};

class FilterInfo extends Component {
    state = {
        isDetailsPage: this.props.match.path.search(/\/film/)
    };

    render() {
        const content = (<React.Fragment>
            <div className='filter-info__results-founded'>
                <span className='results-founded__count'>
                    {this.props.countOfFound}
                </span>
                <span className='results-founded__label'>
                    movies found
                </span>
            </div>
            <div className='filter-info__sorting-options'>
                <span>Sort by</span>
                <label className='sorting-options__option'>
                    <input type='radio' value='date' name='sort' />
                    release date
                </label>
                <label className='sorting-options__option'>
                    <input type='radio' value='rating' name='sort' />
                    rating
                </label>
            </div>
        </React.Fragment>);

        return (
            <div className='header__filter-info'>
                {this.state.isDetailsPage < 0 ? content : ''}
            </div>
        );
    }
}

FilterInfo.propTypes = {
    countOfFound: PropTypes.number,
    match: PropTypes.shape({
        path: PropTypes.string
    })
};

const WrappedFileInfo = withRouter(connect(mapStateToProps, null)(FilterInfo));

export { WrappedFileInfo as FilterInfo };
