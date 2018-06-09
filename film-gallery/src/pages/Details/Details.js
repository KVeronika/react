import React from 'react';

import { Header, FilmsList, Footer, FilmInfo } from '../../components';

import './Details.scss';

export const Details = () => (
    <div>
        <Header>
            <FilmInfo />
        </Header>
        <FilmsList />
        <Footer />
    </div>
);
