export const filterMoviesByText = (movies, query) => {
    return movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(query.toLowerCase())
    );
  };
  
  export const filterMoviesByShort = (movies, isShort) => {
    return isShort ? movies.filter((movie) => movie.duration <= 40) : movies;
  };