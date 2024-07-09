# FilmVault-Project

This is a simple React.js Project which performs 2 functions.
1. Gets list of Movies using TMDB API: link -> (https://developer.themoviedb.org/reference/intro/getting-started)
2. Adds selected movies to watchlist.
  
 Movies in the watchlist are categorized on the basis of genre, rating, popularity.
 When a movie is added in the watchlist, it is also added in the local storage, so that data is restored after refresh.
 On deleting a movie from the watchlist, it is also removed from the local storage.

For the styling, tailwind CSS is used for vite.

Steps to install vite React:
1. In the terminal, enter the command -->  npm create vite@latest
2. Enter the name of the Project ---> FilmVault
3. Select framework ---> React
4. Select variant --> Javascript and press Enter
5. enter the command --> cd FilmVault
6. Install node modules --> npm install
7. To run the project on browser --> npm run dev

Steps to install tailwind CSS in vite react:
1. Go to tailwind CSS website --> (https://tailwindcss.com/)
2. Click Get started
3. Use framework guides ---> (https://tailwindcss.com/docs/installation/framework-guides)
4. Select vite --> (https://tailwindcss.com/docs/guides/vite)
5. Select 'Using React' from React, Vue and Svelte
6. You will find the next steps on tailwind CSS website.

Make a 'components' folder in the 'src' directory.
Inside the components folder, add the files:
  a) Banner.jsx
  b) logo.jpeg
  c) Moviecard.jsx
  d) Movies.jsx
  e) Navbar.jsx
  f) Pagination.jsx
  g) Watchlist.jsx
