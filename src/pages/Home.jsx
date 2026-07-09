import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";

import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../services/movieService";

function Home() {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const [
          trendingData,
          popularData,
          topRatedData,
          upcomingData,
        ] = await Promise.all([
          getTrendingMovies(),
          getPopularMovies(),
          getTopRatedMovies(),
          getUpcomingMovies(),
        ]);

        setTrending(trendingData);
        setPopular(popularData);
        setTopRated(topRatedData);
        setUpcoming(upcomingData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="bg-[#050505] text-white">

      {/* Hero */}
      <Hero />

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">

        <MovieRow
          title="🔥 Trending Now"
          movies={trending}
        />

        <MovieRow
          title="⭐ Popular Movies"
          movies={popular}
        />

        <MovieRow
          title="🏆 Top Rated"
          movies={topRated}
        />

        <MovieRow
          title="🎬 Upcoming Releases"
          movies={upcoming}
        />

      </section>

    </div>
  );
}

export default Home;