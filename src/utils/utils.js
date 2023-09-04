export const filterMoviesByText = (movies, searchText, checked) => {
  return movies.filter((movie) => {
    const lowercaseQuery = searchText.toLowerCase();
    const lowercaseNameRU = movie.nameRU.toLowerCase();
    const lowercaseNameEN = movie.nameEN.toLowerCase();

    const textMatch =
      lowercaseNameRU.includes(lowercaseQuery) ||
      lowercaseNameEN.includes(lowercaseQuery);

    if (checked) {
      return textMatch && movie.duration <= 40;
    }

    return textMatch;
  });
};