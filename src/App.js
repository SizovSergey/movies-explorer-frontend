import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import constants from './utils/constants';
import getMovies from './utils/MoviesApi';


function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
 

  const handleloggedIn = () => {
    setLoggedIn(true)
  }


  return (
    <div className="page">
      <Routes>
        <Route path="/main" element={<constants.mainPage loggedIn={loggedIn} />} />
        <Route path="/signin" element={<Login handleloggedIn={handleloggedIn} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<constants.profilePage loggedIn={loggedIn} />} />
        <Route path="/movies" element={<constants.moviesPage loggedIn={loggedIn}   />} />
        <Route path="/saved-movies" element={<constants.savedMoviesPage loggedIn={loggedIn} />} />
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}


export default App;