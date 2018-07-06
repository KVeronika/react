import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { FilterInfo } from '../../components';

import './Header.scss';

class Header extends Component {
    state = {
        isDetailsPage: this.props.match.path.search(/\/film/) >= 0
    };

    render() {
        const redirectToHomeButton = (<div className='header-title__search-button'>
            <Link to='/'><button>Search</button></Link>
        </div>);

        return (<div>
            <header className='app__header'>
                <div className='app__header-title'>
                    <div className='header-title__label'>netflixroulette</div>
                    { this.state.isDetailsPage ? redirectToHomeButton : null }
                </div>
                {this.props.children}
            </header>
            <FilterInfo />
        </div>);
    }
}

Header.propTypes = {
    children: PropTypes.element.isRequired,
    match: PropTypes.shape({
        path: PropTypes.string
    })
};

const HeaderWithRouter = withRouter(Header);

export { HeaderWithRouter as Header };
