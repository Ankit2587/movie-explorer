import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6">

      <div className="flex flex-col lg:flex-row gap-5">

        {/* Search */}

        <div className="relative flex-1">

          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" />

          <input
            type="text"
            placeholder="Search movies..."
            className="
              w-full
              rounded-2xl
              bg-[#111111]
              border
              border-white/10
              py-4
              pl-14
              pr-5
              text-white
              placeholder:text-zinc-500
              focus:outline-none
              focus:border-white/30
              transition
            "
          />

        </div>

        {/* Genre */}

        <select
          className="
            rounded-2xl
            bg-[#111111]
            border
            border-white/10
            px-6
            py-4
            text-white
            focus:outline-none
            focus:border-white/30
            cursor-pointer
          "
        >
          <option>All Genres</option>
          <option>Action</option>
          <option>Adventure</option>
          <option>Comedy</option>
          <option>Drama</option>
          <option>Horror</option>
          <option>Sci-Fi</option>
          <option>Animation</option>
        </select>

        {/* Sort */}

        <select
          className="
            rounded-2xl
            bg-[#111111]
            border
            border-white/10
            px-6
            py-4
            text-white
            focus:outline-none
            focus:border-white/30
            cursor-pointer
          "
        >
          <option>Popularity</option>
          <option>Top Rated</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>

      </div>

    </div>
  );
}

export default SearchBar;