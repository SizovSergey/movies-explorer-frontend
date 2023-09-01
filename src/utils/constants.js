import Main from "../components/Main/Main";
import Profile from "../components/Profile/Profile";
import Movies from "../components/Movies/Movies";
import SavedMovies from "../components/SavedMovies/SavedMovies";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

 const mainPage = ({ loggedIn }) => (
    <>
        <Header isLogin={loggedIn} />
        <Main />
        <Footer />
    </>
);

 const profilePage = ({ loggedIn }) => (
    <>
        <Header isLogin={loggedIn} />
        <Profile />
    </>
);

const moviesPage = ({ loggedIn }) => (
    <>
        <Header isLogin={loggedIn} />
        <Movies isLogin={loggedIn} />
        <Footer />
    </>
);

 const savedMoviesPage = ({ loggedIn }) => (
    <>
        <Header isLogin={loggedIn} />
        <SavedMovies isLogin={loggedIn} />
        <Footer />
    </>
);

export default {
    mainPage,
    profilePage,
    moviesPage,
    savedMoviesPage
}
