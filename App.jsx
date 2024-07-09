import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import Movies from "./components/Movies";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Banner from "./components/Banner";

function App() {
  let [watchlist, setwatchlist] = useState([]);

  let handleAddToWatchlist = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    setwatchlist(newWatchList);
    localStorage.setItem("movies", JSON.stringify(newWatchList));
    console.log(newWatchList);
  };

  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setwatchlist(filteredWatchList);
    localStorage.setItem('movies',JSON.stringify(filteredWatchList))
    console.log(filteredWatchList);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("movies");
    if (!moviesFromLocalStorage) {
      return;
    }
    setwatchlist(JSON.parse(moviesFromLocalStorage));
  },[]);

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <Movies
                  watchlist={watchlist}
                  handleAddToWatchList={handleAddToWatchlist}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                />
              </>
            }
          ></Route>

          <Route
            path="/watchlist"
            element={
              <Watchlist watchlist={watchlist} setwatchlist={setwatchlist} handleRemoveFromWatchList={handleRemoveFromWatchList} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/popular?api_key=9c1c1651ee4b0bddaf90e59935aed420&language=en-US&page=1
