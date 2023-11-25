/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchMovies from "./pages/SearchMovies";
import DetailsMovie from "./pages/DetailsMovie";
import NavbarComponent from "./components/Navbar";
// eslint-disable-next-line no-unused-vars
import MovieReview from "./pages/MovieReview";


function App() {
    return (
        <BrowserRouter>
            <NavbarComponent />

            <Routes>
                <Route path="/movieReview" element={<MovieReview />} />
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchMovies />} />
                <Route path="/details/:movieId" element={<DetailsMovie />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
