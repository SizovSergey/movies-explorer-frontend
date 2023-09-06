import React from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import InfoPopup from './components/InfoPopup/InfoPopup';
import { MainPage, profilePage, moviesPage, savedMoviesPage } from './utils/constants';
import { CurrentUserContext } from '../src/context/CurrentUserContext';
import { authorize, deleteMovies, getProfile, getSaveMovies, register, saveMovies, updateProfile } from '../src/utils/MainApi.js'
import ProtectedRoute from './components/protectedRoute';


function App() {
  const [loggedIn, setLoggedIn] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSavedMovies, setSavedMovies] = React.useState([]);
  const [serchingSavedMovies, setserchingSavedMovies] = React.useState([]);
  const [isInfoPopupOpen, setInfoPopup] = React.useState(false);
  const [messagePopup, setMessagePopup] = React.useState('');
  const [isPopupFlag, setPopupFlag] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  const closeInfoPopup = () => {
    setInfoPopup(false)
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (loggedIn) {
      Promise.all([
        getProfile(jwt),
        getSaveMovies()
      ])
        .then(([userInfo, savedMovies]) => {
          setCurrentUser({
              name: userInfo.name,
              email: userInfo.email
            });
          setSavedMovies(savedMovies);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [loggedIn])

  const handleUpdateProfile = (name, email) => {
    setIsLoading(true);
    updateProfile(name, email)
      .then((res) => {
        setCurrentUser({name:res.name, email:res.email})
        setInfoPopup(true)
        setMessagePopup('Профиль успешно отредактирован!');
        setPopupFlag(false);
      })
      .catch(error => {
        setInfoPopup(true);
        setMessagePopup('При обновлении профиля произошла ошибка.');
        setInfoPopup(true);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const handleKlassMovie = (movie) => {
    saveMovies(movie)
      .then((movie) => {
        const newMovie = [movie, ...isSavedMovies];
        setSavedMovies(newMovie);
        setserchingSavedMovies(newMovie);
      })
      .catch((error) => {
        console.log(error);
        setMessagePopup(`Ошибка создания карточки: ${error}`);
        setPopupFlag(true);
        setInfoPopup(true);
      });
  };


  const handleRegister = (name, email, password) => {
    register(name, email, password)
      .then(() => {
        handleLogin(email, password)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => setInfoPopup(true));
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
    const currentPath = location.pathname;
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
      {console.log(isPopupFlag)}
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/signin" element={<Login handlelogin={handleLogin} />} />
          <Route path="/signup" element={<Register handleRegister={handleRegister} />} />

          <Route path="/main" element={<MainPage loggedIn={loggedIn} />} />

          <Route path="/profile"
            element={<ProtectedRoute
              element={profilePage}
              loggedIn={loggedIn}
              handleSignOut={handleSignOut}
              handleUpdateProfile={handleUpdateProfile}
            />} />

          <Route path="/movies"
            element={<ProtectedRoute
              element={moviesPage}
              loggedIn={loggedIn}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />}
          />

          <Route path="/saved-movies"
            element={<ProtectedRoute
              element={savedMoviesPage}
              loggedIn={loggedIn} />} />

          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>

      <InfoPopup
          isOpen={isInfoPopupOpen}
          onClose={closeInfoPopup}
          loggedIn={loggedIn}
          message={messagePopup}
          PopupFlag ={isPopupFlag}
        />
    </div>
  );
}


export default App;