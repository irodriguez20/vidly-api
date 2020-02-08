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
    },
    deleteMovie(movies, movieToDelete) {
        movies.splice(movieToDelete, 1)
        return movies;
    },
    updateMovie(movieToUpdate) {
        return movieToUpdate;
    }

}

module.exports = moviesService