export const filterMoviesByText = (movies, searchText, checked) => {
  return movies.filter((movie) => {
    const lowercaseQuery = searchText.toLowerCase();
    const lowercaseNameRU = movie.nameRU.toLowerCase();
    const lowercaseNameEN = movie.nameEN.toLowerCase();

    const textMatch =
      lowercaseNameRU.includes(lowercaseQuery) ||
      lowercaseNameEN.includes(lowercaseQuery);

    if (checked) {
      return textMatch.filter((movie) => movie.duration <= 40);
    } 
    return textMatch;
  });
};

export const filterMoviesByCheckbox = (movies, checked) => {
  if (checked) {
    return movies.filter((movie) => movie.duration <= 40);
  } else {
    return movies;
  }
};