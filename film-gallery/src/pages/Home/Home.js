import React from 'react';

import { Header, FilmsList, Footer, Search } from '../../components';

import './Home.scss';

export const Home = () => (
    <React.Fragment>
        <Header>
            <Search />
        </Header>
        <FilmsList />
        <Footer />
    </React.Fragment>
);
