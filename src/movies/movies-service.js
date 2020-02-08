const moviesService = {
    getAllMovies(movies) {
        return movies;
    },
    insertMovie(movies, newMovie) {
        movies.push(newMovie);
        return movies;
    },
    getById(movie) {
        return movie;
    }
}

module.exports = moviesService