import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaStar,
  FaCalendarAlt,
  FaClock,
  FaGlobe,
  FaPlay,
} from "react-icons/fa";

import {
  getMovieDetails,
  getMovieVideos,
  getMovieCredits,
} from "../services/movieService";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovie() {
      try {
        const details = await getMovieDetails(id);
        setMovie(details);

        const videos = await getMovieVideos(id);

        const officialTrailer = videos.find(
          (video) =>
            video.site === "YouTube" &&
            (video.type === "Trailer" ||
              video.type === "Teaser")
        );

        setTrailer(officialTrailer || null);

        const castData = await getMovieCredits(id);
        setCast(castData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">

        <div className="w-16 h-16 border-4 border-zinc-700 border-t-white rounded-full animate-spin"></div>

      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white text-3xl">

        Movie Not Found

      </div>
    );
  }

  return (
    <div className="bg-[#050505] text-white min-h-screen">

      {/* Backdrop */}

      <section
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-[#050505] to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-end pb-20">

          <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-end">

            {/* Poster */}

            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="
                w-[320px]
                rounded-[32px]
                shadow-[0_30px_80px_rgba(0,0,0,.6)]
                border
                border-white/10
              "
            />

            {/* Content */}

            <div>

              <Link
                to="/movies"
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-white mb-8"
              >
                <FaArrowLeft />

                Back to Movies

              </Link>

              <h1 className="text-5xl md:text-7xl font-black tracking-tight">

                {movie.title}

              </h1>

              <div className="flex flex-wrap gap-6 mt-8">

                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-5 py-3">

                  <FaStar className="text-yellow-400" />

                  {movie.vote_average.toFixed(1)}

                </div>

                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-5 py-3">

                  <FaCalendarAlt />

                  {movie.release_date}

                </div>

                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-5 py-3">

                  <FaClock />

                  {movie.runtime} min

                </div>

                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-5 py-3">

                  <FaGlobe />

                  {movie.original_language.toUpperCase()}

                </div>

              </div>

              <div className="flex flex-wrap gap-3 mt-8">

                {movie.genres.map((genre) => (

                  <span
                    key={genre.id}
                    className="bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm"
                  >
                    {genre.name}
                  </span>

                ))}

              </div>

              <div className="flex gap-5 mt-10">

                {trailer && (

                  <a
                    href={`https://youtube.com/watch?v=${trailer.key}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center gap-3"
                  >
                    <FaPlay />

                    Watch Trailer

                  </a>

                )}
                              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Overview */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left */}

          <div className="lg:col-span-2">

            <h2 className="text-3xl font-bold mb-6">
              Overview
            </h2>

            <p className="text-zinc-400 leading-8 text-lg">
              {movie.overview}
            </p>

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

            <h3 className="text-2xl font-bold mb-8">
              Movie Info
            </h3>

            <div className="space-y-6">

              <div>

                <p className="text-zinc-500 text-sm">
                  Original Title
                </p>

                <h4 className="text-lg font-semibold mt-1">
                  {movie.original_title}
                </h4>

              </div>

              <div>

                <p className="text-zinc-500 text-sm">
                  Status
                </p>

                <h4 className="text-lg font-semibold mt-1">
                  {movie.status}
                </h4>

              </div>

              <div>

                <p className="text-zinc-500 text-sm">
                  Popularity
                </p>

                <h4 className="text-lg font-semibold mt-1">
                  {Math.round(movie.popularity)}
                </h4>

              </div>

              <div>

                <p className="text-zinc-500 text-sm">
                  Vote Count
                </p>

                <h4 className="text-lg font-semibold mt-1">
                  {movie.vote_count}
                </h4>

              </div>

              <div>

                <p className="text-zinc-500 text-sm">
                  Budget
                </p>

                <h4 className="text-lg font-semibold mt-1">
                  {movie.budget
                    ? `$${movie.budget.toLocaleString()}`
                    : "N/A"}
                </h4>

              </div>

              <div>

                <p className="text-zinc-500 text-sm">
                  Revenue
                </p>

                <h4 className="text-lg font-semibold mt-1">
                  {movie.revenue
                    ? `$${movie.revenue.toLocaleString()}`
                    : "N/A"}
                </h4>

              </div>

            </div>

          </div>

        </div>

        {/* Production Companies */}

        {movie.production_companies?.length > 0 && (

          <div className="mt-20">

            <h2 className="text-3xl font-bold mb-8">
              Production Companies
            </h2>

            <div className="flex flex-wrap gap-4">

              {movie.production_companies.map((company) => (

                <div
                  key={company.id}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
                >
                  {company.name}
                </div>

              ))}

            </div>

          </div>

        )}

        {/* Trailer */}

        {trailer && (

          <section className="mt-24">

            <h2 className="text-3xl font-bold mb-8">
              Official Trailer
            </h2>

            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

              <iframe
                className="w-full h-[250px] md:h-[650px]"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="Trailer"
                allowFullScreen
              ></iframe>

            </div>

          </section>

        )}
                {/* Top Cast */}

        {cast.length > 0 && (

          <section className="mt-24">

            <div className="flex items-center justify-between mb-10">

              <div>

                <h2 className="text-4xl font-black tracking-tight">
                  Top Cast
                </h2>

                <p className="text-zinc-500 mt-2">
                  Meet the talented cast behind the movie.
                </p>

              </div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

              {cast.slice(0, 10).map((actor) => (

                <div
                  key={actor.id}
                  className="
                    group
                    rounded-[28px]
                    overflow-hidden
                    bg-[#101010]
                    border
                    border-white/5
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-white/20
                    hover:shadow-[0_25px_60px_rgba(0,0,0,.6)]
                  "
                >

                  <div className="overflow-hidden">

                    <img
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                          : "https://placehold.co/500x750?text=No+Photo"
                      }
                      alt={actor.name}
                      className="
                        w-full
                        h-[320px]
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                  </div>

                  <div className="p-5">

                    <h3 className="text-xl font-bold text-white line-clamp-2">

                      {actor.name}

                    </h3>

                    <p className="text-zinc-500 mt-2 line-clamp-2">

                      {actor.character}

                    </p>

                  </div>

                </div>

              ))}

            </div>

          </section>

        )}
                {/* Similar Movies */}

        {movie.similar?.results?.length > 0 && (

          <section className="mt-24">

            <div className="flex items-center justify-between mb-10">

              <div>

                <h2 className="text-4xl font-black tracking-tight">
                  Similar Movies
                </h2>

                <p className="text-zinc-500 mt-2">
                  You may also like these movies.
                </p>

              </div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

              {movie.similar.results.slice(0, 10).map((item) => (

                <Link
                  key={item.id}
                  to={`/movie/${item.id}`}
                  className="
                    group
                    overflow-hidden
                    rounded-[28px]
                    bg-[#101010]
                    border
                    border-white/5
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-white/20
                    hover:shadow-[0_25px_60px_rgba(0,0,0,.6)]
                  "
                >

                  <div className="overflow-hidden">

                    <img
                      src={
                        item.poster_path
                          ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                          : "https://placehold.co/500x750?text=No+Image"
                      }
                      alt={item.title}
                      className="
                        w-full
                        h-[340px]
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                  </div>

                  <div className="p-5">

                    <h3 className="text-lg font-bold text-white line-clamp-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center justify-between mt-4">

                      <span className="text-zinc-500 text-sm">
                        {item.release_date?.split("-")[0]}
                      </span>

                      <span className="flex items-center gap-1 text-yellow-400">

                        <FaStar className="text-sm" />

                        {item.vote_average.toFixed(1)}

                      </span>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </section>

        )}

      </section>

    </div>
  );
}

export default MovieDetails;
