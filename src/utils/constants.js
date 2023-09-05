import Main from "../components/Main/Main";
import Profile from "../components/Profile/Profile";
import Movies from "../components/Movies/Movies";
import SavedMovies from "../components/SavedMovies/SavedMovies";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const mainPage = ({ loggedIn }) => (
    <>
        <Header loggedIn={loggedIn} />
        <Main />
        <Footer />
    </>
);

export const profilePage = ({ loggedIn, handleSignOut }) => (
    <>
        <Header loggedIn={loggedIn} />
        <Profile  handleSignOut={handleSignOut} />
    </>
);

export const moviesPage = ({ loggedIn }) => (
    <>
        <Header loggedIn={loggedIn} />
        <Movies loggedIn={loggedIn} />
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


