import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import getMovies from '../../utils/MoviesApi';



const Movies = ({}) => {

    const [movies, setMovies] = React.useState([]);
    const [searchingMovies, setsearchingMovies] = React.useState([]);
    const [searchText, setSearchText] = React.useState('');
  
    React.useEffect(() => {
      const text = localStorage.getItem('serchingText');
        Promise.all([
          getMovies()
        ])
          .then(([movies]) => {
            const allMovies = movies.map(movie => movie);
            let searchingMovies = allMovies.filter((movie) => {
                return movie.nameRU.toLowerCase().includes(text.toLowerCase());
              })
              searchingMovies = localStorage.setItem('searchingMovies');
            console.log(text)
            setMovies(searchingMovies);
          })
          .catch((err) => {
            console.log(err.message);
          });
  
    }, [searchText])

    const handleSearch = (text) => {
        setSearchText(text);
      }

    return (
        <main className='movies'>
            <SearchForm movies={movies} onSearch={handleSearch}/>
            <MoviesCardList movies={movies} />
            <button className='movies__button-more'>Eщё</button>
        </main>
    );
}

export default Movies;