import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function MovieCard({ movie }) {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://placehold.co/500x750?text=No+Image";

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group block"
    >
      <article
        className="
          overflow-hidden
          rounded-[28px]
          bg-[#101010]
          border
          border-white/5
          transition-all
          duration-500
          hover:-translate-y-3
          hover:border-white/15
          hover:shadow-[0_30px_80px_rgba(0,0,0,.7)]
        "
      >
        {/* Poster */}

        <div className="relative overflow-hidden">

          <img
            src={poster}
            alt={movie.title}
            className="
              w-full
              h-[430px]
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

          {/* Rating */}

          <div className="absolute top-5 right-5">

            <div className="flex items-center gap-2 rounded-full bg-black/70 backdrop-blur-xl px-4 py-2">

              <FaStar className="text-yellow-400" />

              <span className="text-white font-semibold">
                {movie.vote_average.toFixed(1)}
              </span>

            </div>

          </div>

        </div>

        {/* Content */}

        <div className="p-6">

          <p className="text-zinc-500 text-sm">
            {movie.release_date?.split("-")[0]}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white line-clamp-2">
            {movie.title}
          </h3>

          <div className="mt-6 flex items-center justify-between">

            <span className="text-zinc-400">
              View Details
            </span>

            <div className="
              w-10
              h-10
              rounded-full
              bg-white/10
              flex
              items-center
              justify-center
              transition
              group-hover:bg-white
              group-hover:text-black
            ">
              →
            </div>

          </div>

        </div>

      </article>
    </Link>
  );
}

export default MovieCard;