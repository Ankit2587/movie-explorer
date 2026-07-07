import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import MovieCard from "./MovieCard";

function MovieRow({ title, movies = [] }) {
  return (
    <section className="mb-20">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h2>

        <Link
          to="/movies"
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition"
        >
          View All

          <FaChevronRight />
        </Link>

      </div>

      {/* Horizontal Scroll */}

      <div
        className="
          flex
          gap-6
          overflow-x-auto
          scrollbar-hide
          scroll-smooth
          pb-4
        "
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[270px] max-w-[270px] flex-shrink-0"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

    </section>
  );
}

export default MovieRow;