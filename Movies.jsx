import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({ handleAddToWatchList, handleRemoveFromWatchList,watchlist}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  const handlePrev = () => {
    if (pageNo === 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=9c1c1651ee4b0bddaf90e59935aed420&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div>
      <h1 className="text-center mt-10 font-bold text-3xl">Trending Movies</h1>

      <div className="flex flex-wrap justify-around py-3">
        {movies.map((movieObj) => {
          return (
            <Moviecard
              key={movieObj.id}
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddToWatchlist={handleAddToWatchList}
              watchlist={watchlist}
              handleRemoveFromWatchlist={handleRemoveFromWatchList}
            ></Moviecard>
          );
        })}
      </div>

      <Pagination
        pageNo={pageNo}
        handlePrev={handlePrev}
        handleNext={handleNext}
      ></Pagination>
    </div>
  );
}

export default Movies;
