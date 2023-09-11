export const filterMoviesByText = (movies, searchText) => {
  return movies.filter((movie) => {
    const lowercaseQuery = searchText.toLowerCase();
    const lowercaseNameRU = movie.nameRU.toLowerCase();
    const lowercaseNameEN = movie.nameEN.toLowerCase();

    const textMatch =
      lowercaseNameRU.includes(lowercaseQuery) ||
      lowercaseNameEN.includes(lowercaseQuery);

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

export const patterns = {
  name: '^[a-zA-Zа-яА-ЯёЁ\\s\\-]+$',
  email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
};