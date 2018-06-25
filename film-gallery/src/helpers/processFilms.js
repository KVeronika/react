export const processFilms = (films) => {
    return films.map((film) => {
        return {
            id: film.show.id,
            name: film.show.name,
            rating: film.score,
            url: film.show.url,
            language: film.show.language,
            genres: film.show.genres,
            status: film.show.status,
            runtime: film.show.runtime,
            releaseDate: film.show.premiered,
            images: film.show.image,
            summary: film.show.summary
        };
    });
};
