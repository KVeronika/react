export const processFilmList = (films) => {
    return films.map((film) => {
        return processFilm(film);
    });
};

export const processFilm = (film) => {
    return {
        id: film.id,
        name: film.title,
        releaseDate: new Date(film.release_date).getFullYear(),
        image: film.poster_path,
        genres: film.genres,
        rating: film.vote_average,
        runtime: film.runtime,
        summary: film.overview,
        tagline: film.tagline,
        budget: film.budget
    };
};
