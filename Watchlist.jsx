import React, { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";
import movieGenres from "../Utility/genres";

function Watchlist({ watchlist, setwatchlist,handleRemoveFromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((a, b) => {
      return a.vote_average - b.vote_average;
    });
    setwatchlist([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((a, b) => {
      return b.vote_average - a.vote_average;
    });
    setwatchlist([...sortedDecreasing]);
  };

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return movieGenres[movieObj.genre_ids[0]];
    });
    temp = new Set(temp)
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex justify-center cursor-pointer bg-blue-500 h-[3rem] w-[8rem]  font-medium rounded-xl items-center m-4 text-white"
                  : "flex justify-center cursor-pointer bg-gray-500/55 h-[3rem] w-[8rem]  font-medium rounded-xl items-center m-4 text-white"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for movies"
          className="h-[3rem] w-[18rem] outline-none rounded-md px-3 py-2 bg-gray-200"
          onChange={handleSearch}
          value={search}
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-center text-gray-700">
          <thead className="border-b-2">
            <tr className="pt-5 pb-5">
              <th>Name</th>
              <div className="flex items-center space-x-2 justify-center">
                <div onClick={sortIncreasing} className="cursor-pointer">
                  <MdArrowUpward />
                </div>
                <th>Ratings</th>
                <div onClick={sortDecreasing} className="cursor-pointer">
                  <MdArrowDownward />
                </div>
              </div>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist.filter((movieObj)=>{
              if(currGenre==='All Genres') return true
              else{
                return movieGenres[movieObj.genre_ids[0]] === currGenre
              }
            })
              .filter((movieObj) => {
                return movieObj.original_title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2 mt-2">
                    <td className="flex justify-start mx-4 my-3 items-center">
                      <img
                        className="h-[7rem] w-[5rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                        alt=""
                      />
                      <div className="mx-10 my-auto">
                        {movieObj.original_title}
                      </div>
                    </td>

                    <td className="flex-row justify-between items-center px-6 py-4">
                      {movieObj.vote_average}
                    </td>

                    <td>{movieObj.popularity}</td>

                    <td>{movieGenres[movieObj.genre_ids[0]]}</td>

                    <td>
                      <button className="text-red-600" onClick={()=>handleRemoveFromWatchList(movieObj)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
