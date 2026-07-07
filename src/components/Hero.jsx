import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPlay,
  FaInfoCircle,
  FaStar,
  FaCalendarAlt,
} from "react-icons/fa";

import { getHeroMovie } from "../services/movieService";

function Hero() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function loadHero() {
      try {
        const data = await getHeroMovie();
        setMovie(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadHero();
  }, []);

  if (!movie) {
    return (
      <section className="h-screen bg-[#050505] flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-4 border-zinc-700 border-t-white animate-spin"></div>
      </section>
    );
  }

  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-[#050505] to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-2xl">

          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-5 py-2 text-sm font-medium">
            Featured Movie
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
            {movie.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-8 text-zinc-300">

            <span className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              {movie.vote_average.toFixed(1)}
            </span>

            <span className="flex items-center gap-2">
              <FaCalendarAlt />
              {movie.release_date}
            </span>

          </div>

          <p className="mt-8 text-lg text-zinc-300 leading-8 max-w-xl line-clamp-5">
            {movie.overview}
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              to={`/movie/${movie.id}`}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:scale-105 transition"
            >
              <FaPlay />
              Watch Now
            </Link>

            <Link
              to={`/movie/${movie.id}`}
              className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-full flex items-center gap-3 hover:bg-white/20 transition"
            >
              <FaInfoCircle />
              More Info
            </Link>
                      </div>

        </div>

      </div>

      {/* Floating Movie Poster */}

      <div className="hidden xl:flex absolute right-16 top-1/2 -translate-y-1/2">

        <div className="relative">

          <div className="absolute -inset-4 rounded-[40px] bg-white/10 blur-3xl"></div>

          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="
              relative
              w-[340px]
              rounded-[32px]
              shadow-[0_30px_80px_rgba(0,0,0,.6)]
              border
              border-white/10
            "
          />

        </div>

      </div>

      {/* Movie Information Card */}

      <div className="hidden lg:block absolute bottom-10 left-1/2 -translate-x-1/2">

        <div className="
          backdrop-blur-2xl
          bg-white/5
          border
          border-white/10
          rounded-3xl
          px-8
          py-6
        ">

          <div className="flex items-center gap-10">

            <div>

              <p className="text-zinc-400 text-sm">
                Rating
              </p>

              <h3 className="text-2xl font-bold mt-1">
                ⭐ {movie.vote_average.toFixed(1)}
              </h3>

            </div>

            <div className="w-px h-12 bg-white/10"></div>

            <div>

              <p className="text-zinc-400 text-sm">
                Release
              </p>

              <h3 className="text-2xl font-bold mt-1">
                {movie.release_date?.split("-")[0]}
              </h3>

            </div>

            <div className="w-px h-12 bg-white/10"></div>

            <div>

              <p className="text-zinc-400 text-sm">
                Language
              </p>

              <h3 className="text-2xl font-bold uppercase mt-1">
                {movie.original_language}
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
