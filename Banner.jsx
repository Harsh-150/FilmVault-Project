import React from "react";

function Banner() {
  return (
    <div
      className="h-[80vh] md:h-[70vh] w-[100vw] bg-cover bg-top flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg)`
      }}
    >
        <div className="text-3xl bg-gray-900/60 w-full text-center text-white">
            THE MARTIAN
        </div>
    </div>
  );
}

export default Banner;
