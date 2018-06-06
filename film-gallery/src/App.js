import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <div className="app__header-title">netflixroulette</div>
          <div className="app__header-search">
            <p className="header-search__label">find your movie</p>
            <form>
              <input className="header-search__input" name="filter"/>
              <div className="header-search__controls-container">
                <div className="controls-container__filters">
                  <span className="filters__label">search by</span>
                  <label className="filters__option">
                    <input type="radio" value="title" name="filter"/>
                    title
                  </label>
                  <label className="filters__option">
                    <input type="radio" value="director" name="filter"/>
                    director
                  </label>
                </div>
                <div className="controls-container__submit">
                  <button className="submit__submit-button" type="submit">search</button>
                </div>
              </div>
            </form>
          </div>
        </header>
        <div className="header__additional-info">
            <div className="additional-info__results-founded">
              <span className="results-founded__count">7</span><span className="results-founded__label">movies found</span>
            </div>
            <div className="additional-info__sorting-options">
              <span>Sort by</span>
              <label className="sorting-options__option">
                <input type="radio" value="date" name="sort"/>
                release date
              </label>
              <label className="sorting-options__option">
                <input type="radio" value="rating" name="sort"/>
                rating
              </label>
            </div>
        </div>
        <div className="app__films-container">
          <div className="films-container__film">
            <img className="film__cover" src={require("./image.png")} alt="film cover"/>
            <div className="film__main-info">
              <p className="main-info__title">first film</p>
              <div className="main-info__year">2004</div>              
            </div>
            <p className="film__category">some type</p>
          </div>
          <div className="films-container__film">
            <img className="film__cover" src={require("./image.png")} alt="film cover"/>
            <div className="film__main-info">
              <p className="main-info__title">second film</p>
              <div className="main-info__year">2004</div>              
            </div>
            <p className="film__category">some type</p>
          </div>
          <div className="films-container__film">
            <img className="film__cover" src={require("./image.png")} alt="film cover"/>
            <div className="film__main-info">
              <p className="main-info__title">third film</p>
              <div className="main-info__year">2004</div>              
            </div>
            <p className="film__category">some type</p>
          </div>
          <div className="films-container__film">
            <img className="film__cover" src={require("./image.png")} alt="film cover"/>
            <div className="film__main-info">
              <p className="main-info__title">fourth film</p>
              <div className="main-info__year">2004</div>              
            </div>
            <p className="film__category">some type</p>
          </div>
        </div>
        <div className="app__footer">
          <div className="footer__text">netflixroulette</div>
        </div>
      </div>
    );
  }
}

export default App;
