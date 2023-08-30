import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from "./components/Login/Login";
import Main from './components/Main/Main';
import Movies from './components/Movies/Movies';
import Profile from './components/Profile/Profile';
import Register from "./components/Register/Register";
import SavedMovies from './components/SavedMovies/SavedMovies';
import NotFound from "./components/NotFound/NotFound";



function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);


  return (
    <div className="page">
    {/* Не совсем понятно что имеется ввиду про 'из main следует вытянуть header и footer на каждой отдельной странице' */}
      <Routes>
          <Route path="/signin" element = {<Login />}/>
          <Route path="/signup" element = {<Register />}/>
          <Route path='/movies' element={<Movies isLogin={loggedIn}/>} />
          <Route path='/saved-movies' element={<SavedMovies isLogin={loggedIn}/>} />
          <Route path='/profile' element={<Profile isLogin={loggedIn}/>} />
          <Route path="/main" element={<Main isLogin={loggedIn}/>} />
          <Route path='/' element={<Navigate to="/main" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

    </div>
  );
}

export default App;
