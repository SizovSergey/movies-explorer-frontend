import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import constants from './utils/constants';
import getMovies from './utils/MoviesApi';


function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');

  React.useEffect(() => {
    const text = localStorage.getItem('serchingText');
      Promise.all([
        getMovies()
      ])
        .then(([movies]) => {
          const allMovies = movies.map(movie => movie);
         const searchingMovies = allMovies.filter((movie) => {
              return movie.nameRU.toLowerCase().includes(text.toLowerCase());
            })
          console.log(text)
          setMovies(searchingMovies);
        })
        .catch((err) => {
          console.log(err.message);
        });

  }, [searchText])

  const handleloggedIn = () => {
    setLoggedIn(true)
  }

  const handleSearch = (text) => {
    setSearchText(text);
  }

  return (
    <div className="page">
      {console.log(movies)}
      <Routes>
        <Route path="/main" element={<constants.mainPage loggedIn={loggedIn} />} />
        <Route path="/signin" element={<Login handleloggedIn={handleloggedIn} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<constants.profilePage loggedIn={loggedIn} />} />
        <Route path="/movies" element={<constants.moviesPage loggedIn={loggedIn} movies={movies} onSearch={handleSearch} />} />
        <Route path="/saved-movies" element={<constants.savedMoviesPage loggedIn={loggedIn} />} />
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}


export default App;