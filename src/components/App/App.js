import React from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import InfoPopup from '../InfoPopup/InfoPopup';
import { MainPage, profilePage, moviesPage, savedMoviesPage } from '../../utils/routes';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { authorize, deleteMovies, getProfile, register, getSaveMovies, saveMovies, updateProfile } from '../../utils/MainApi.js'
import ProtectedRoute from '../protectedRoute';


function App() {
  const [loggedIn, setLoggedIn] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isInfoPopupOpen, setInfoPopup] = React.useState(false);
  const [messagePopup, setMessagePopup] = React.useState('');
  const [isPopupFlag, setPopupFlag] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
  });



  const openInfoPopup = (text, flag) => {
    setInfoPopup(true);
    setMessagePopup(text);
    setPopupFlag(flag)
  }

  const navigate = useNavigate();
  const location = useLocation();

  const closeInfoPopup = () => {
    setInfoPopup(false)
  }

  const handleUpdateProfile = (name, email) => {
    const jwt = localStorage.getItem('token');
    setIsLoading(true);
    updateProfile(name, email,jwt)
      .then((res) => {
        setCurrentUser({ name: res.name, email: res.email })
        openInfoPopup('Профиль успешно отредактирован!', true);
      })
      .catch(error => {
        openInfoPopup('При обновлении профиля произошла ошибка.', false);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const handleSaveMovie = (movie) => {
    const jwt = localStorage.getItem('token');
    const isAlreadySaved = savedMovies.some((savedMovie) => savedMovie.movieId === movie.id);
    if (!isAlreadySaved) {
      saveMovies(movie, jwt)
        .then((movie) => {

          const newMovie = [movie, ...savedMovies];
          setSavedMovies(newMovie);
        })
        .catch((error) => {

          console.log(error);
          openInfoPopup('Фильм не удалось сохранить', false);
        });
    }
  };

  const handleDeleteMovie = (movie) => {
    const jwt = localStorage.getItem('token');
    const isAlreadyToDeleted = savedMovies.some((item) => item.movieId === movie.id);

    if (isAlreadyToDeleted) {
      const idToDelete = savedMovies.find((item) => item.movieId === movie.id)._id;
      deleteMovies(idToDelete, jwt)
        .then(() => {
          setSavedMovies(savedMovies.filter(item => item._id !== idToDelete));
        })
        .catch((error) => {
          openInfoPopup('При удалении фильма произошла ошибка', false);
        });
    } else {
      deleteMovies(movie._id, jwt)
        .then(() => {
          setSavedMovies(savedMovies.filter(item => item._id !== movie._id));
        })
        .catch((error) => {
          openInfoPopup('При удалении фильма произошла ошибка', false);
        });
    }
  }

  const handleRegister = (name, email, password) => {
    register(name, email, password)
      .then(() => {
        handleLogin(email, password)
      })
      .catch(error => {
        openInfoPopup(`При регистрации пользователя произошла ошибка.${error}`, false);
      })
  }

  const handleLogin = (email, password) => {
    authorize(email, password)
      .then(data => {
        localStorage.setItem('token', data.token);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch(error => {
        openInfoPopup(`При авторизации произошла ошибка.${error}`, false);
      });
  }

  const checkToken = () => {
    const jwt = localStorage.getItem('token');
    const currentPath = location.pathname;
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
        .catch(err => {
          console.log(err);
        });
    }
  }

  const handleSignOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    setSavedMovies([]);
    navigate('/', { replace: true })
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (loggedIn) {
      getProfile(jwt)
        .then((res) => {
          setCurrentUser({
            name: res.name,
            email: res.email
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (loggedIn) {
        getSaveMovies(jwt)
        .then((res) => {
          setSavedMovies(res);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    checkToken();
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          
          <Route
            path="/signin"
            element={
              !loggedIn ? (
                <Login handlelogin={handleLogin} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/signup"
            element={
              !loggedIn ? (
                <Register handleRegister={handleRegister} />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route path="/main" element={<MainPage loggedIn={loggedIn} />} />
          <Route path="/" element={<Navigate to="/main" replace />} />

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
              openInfoPopup={openInfoPopup}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              savedMovies={savedMovies}

            />}
          />

          <Route path="/saved-movies"
            element={<ProtectedRoute
              element={savedMoviesPage}
              loggedIn={loggedIn}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              handleDeleteMovie={handleDeleteMovie}
              openInfoPopup={openInfoPopup}
            />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </CurrentUserContext.Provider>

      <InfoPopup
        isOpen={isInfoPopupOpen}
        onClose={closeInfoPopup}
        loggedIn={loggedIn}
        message={messagePopup}
        PopupFlag={isPopupFlag}
      />
    </div>
  );
}


export default App;