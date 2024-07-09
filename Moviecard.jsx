import React from "react";

function Moviecard({
  poster_path,
  name,
  handleAddToWatchlist,
  movieObj,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) return true;
    }
    return false;
  }

  return (
    <div
      className="h-[45vh] w-[185px] m-3 bg-center bg-cover rounded-xl hover:scale-110 duration-200 hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div className="absolute" onClick={()=>handleRemoveFromWatchlist(movieObj)}>&#10060;</div>
      ) : (
        <div className="absolute"  onClick={() => handleAddToWatchlist(movieObj)}>&#128525;</div>
      )}

      <div className="text-white w-full p-2 text-center rounded-t-xl bg-gray-900/75 font-medium text-xl flex-col">
        {name}
      </div>
    </div>
  );
}

export default Moviecard;
