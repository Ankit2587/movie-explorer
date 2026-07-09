const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Popular Movies
export async function getPopularMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
}

// Trending Movies
export async function getTrendingMovies() {
  const res = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
}

// Top Rated
export async function getTopRatedMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
}

// Upcoming
export async function getUpcomingMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
}

// Hero Banner
export async function getHeroMovie() {
  const res = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results[0];
}

// Movie Details
export async function getMovieDetails(id) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return await res.json();
}

// Trailer
export async function getMovieVideos(id) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
  );

  const data = await res.json();

  return data.results;
}

// Cast
export async function getMovieCredits(id) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );

  const data = await res.json();

  return data.cast.slice(0, 10);
}