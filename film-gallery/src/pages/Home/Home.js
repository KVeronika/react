import React from 'react';

import { Header, FilmsList, Footer, Search } from '../../components';

import './Home.scss';

export const Home = () => (
    <div>
        <Header>
            <Search />
        </Header>
        <FilmsList />
        <Footer />
    </div>
);
