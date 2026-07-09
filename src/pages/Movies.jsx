import { FaFilm } from "react-icons/fa";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";

function Movies() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {/* Hero Section */}

      <section className="pt-36 pb-14">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2">

              <FaFilm />

              <span className="text-sm tracking-wide">
                Movie Collection
              </span>

            </div>

            <h1 className="mt-8 text-6xl md:text-7xl font-black tracking-tight">

              Explore Movies

            </h1>

            <p className="mt-6 text-zinc-400 text-lg leading-8 max-w-2xl">

              Search thousands of movies, explore trailers,
              ratings, cast information and discover your
              next favourite movie.

            </p>

          </div>

        </div>

      </section>

      {/* Search */}

      <section className="pb-16">

        <div className="max-w-7xl mx-auto px-6">

          <SearchBar />

        </div>

      </section>

      {/* Grid */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between mb-10">

            <div>

              <h2 className="text-4xl font-bold">

                Popular Movies

              </h2>

              <p className="text-zinc-500 mt-2">

                Browse the latest trending movies.

              </p>

            </div>

          </div>

          <MovieGrid />

        </div>

      </section>

    </div>
  );
}

export default Movies;