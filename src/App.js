import React from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import { mainPage, profilePage, moviesPage, savedMoviesPage } from './utils/constants';
import { CurrentUserContext } from '../src/context/CurrentUserContext';
import { authorize, deleteMovies, getProfile, getSaveMovies, register, saveMovies, updateProfile } from '../src/utils/MainApi.js'
import ProtectedRoute from './components/protectedRoute';


function App() {
  const [loggedIn, setLoggedIn] = React.useState();
  const [isInfoTooltipPopupOpen, setInfoTooltipPopup] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
  });



  const handleRegister = (name, email, password) => {
    register(name, email, password)
      .then(() => {
        handleLogin(email, password)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => setInfoTooltipPopup(true));
  }

  const handleLogin = (email, password) => {
    authorize(email, password)
      .then(data => {

        localStorage.setItem('token', data.token);
        setLoggedIn(true);
        navigate('/main', { replace: true });

      })
      .catch(err => {
        console.log(err);
      });
  }

  const checkToken = () => {
   const currentPath = location.pathname
    const jwt = localStorage.getItem('token');
    if (jwt) {
      getProfile(jwt)
        .then(res => {
          setLoggedIn(true);
          navigate(currentPath);
          setCurrentUser(
            {
              name: res.name,
              email: res.email
            })

        })
        .catch(console.log);
    }
  }

  React.useEffect(() => {
    checkToken();
  }, []);

  const handleSignOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('movies');
    localStorage.removeItem('filteredMovies');
    localStorage.removeItem('isShort');
    localStorage.removeItem('searchText');
    navigate('/sign-in', { replace: true })

  }

  return (
    <div className="page">
      {console.log(loggedIn)}
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/signin" element={<Login handlelogin={handleLogin} />} />
          <Route path="/signup" element={<Register handleRegister={handleRegister} />} />

          <Route path="/main" element=
            {<ProtectedRoute
              element={mainPage}
              loggedIn={loggedIn}
            />} />

          <Route path="/profile"
            element={<ProtectedRoute
              element={profilePage}
              loggedIn={loggedIn}
              handleSignOut={handleSignOut}
            />} />

          <Route path="/movies"
            element={<ProtectedRoute
              element={moviesPage}
              loggedIn={loggedIn} />} />

          <Route path="/saved-movies"
            element={<ProtectedRoute
              element={savedMoviesPage}
              loggedIn={loggedIn} />} />

          <Route path="/" element={loggedIn ? <Navigate to="/main" replace /> : <Navigate to="/signin" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}


export default App;