import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from "./components/Login/Login";
import Main from './components/Main/Main';
import Movies from './components/Movies/Movies';
import Profile from './components/Profile/Profile';
import Register from "./components/Register/Register";
import SavedMovies from './components/SavedMovies/SavedMovies';
import NotFound from "./components/NotFound/NotFound";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {

  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <div className="page">
    
      <Routes>
          <Route path="/signin" element = {<Login />}/>
          <Route path="/signup" element = {<Register />}/>
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/main" element={<Main />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/' element={<Navigate to="/main" replace />} />
        </Routes>

    </div>
  );
}

export default App;
