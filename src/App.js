import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import Movies from './components/Movies';
import Profile from './components/Profile';
import Register from './components/Register';
import SavedMovies from './components/SavedMovies';
import Header from './components/Header/Header';


function App() {

  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <div className="page">
      <Header loggedIn={loggedIn} />
    
      <Routes>
          <Route path="/signin" element = {<Login />}/>
          <Route path="/signup" element = {<Register />}/>
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/main" element={<Main />} />
          <Route path='/' element={<Navigate to="/main" replace />} />
        </Routes>
    </div>
  );
}

export default App;
