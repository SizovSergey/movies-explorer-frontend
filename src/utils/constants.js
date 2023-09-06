import Main from "../components/Main/Main";
import Profile from "../components/Profile/Profile";
import Movies from "../components/Movies/Movies";
import SavedMovies from "../components/SavedMovies/SavedMovies";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const MainPage = ({ loggedIn }) => (
    <>
        <Header loggedIn={loggedIn} />
        <Main />
        <Footer />
    </>
);

export const profilePage = ({ loggedIn, handleSignOut, handleUpdateProfile }) => (
    <>
        <Header loggedIn={loggedIn} />
        <Profile
            handleSignOut={handleSignOut}
            handleUpdateProfile={handleUpdateProfile}
            loggedIn={loggedIn}
        />
    </>
);

export const moviesPage = ({ loggedIn, isLoading, setIsLoading, openInfoPopup }) => (
    <>
        <Header loggedIn={loggedIn} />
        <Movies
            loggedIn={loggedIn}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            openInfoPopup={openInfoPopup}
        />
        <Footer />
    </>
);

export const savedMoviesPage = ({ loggedIn }) => (
    <>
        <Header loggedIn={loggedIn} />
        <SavedMovies loggedIn={loggedIn} />
        <Footer />
    </>
);


