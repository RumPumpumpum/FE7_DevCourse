import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
// import MovieLoader from "./MovieLoader";
import MovieMain from "./MovieMain";

export default function Movie() {
  return (
    <>
      <MovieHeader />
      <MovieMain />
      <MovieList title="Now playing" category="now_playing" />
      <MovieList title="Upcoming" category="upcoming" />
      <MovieList title="Popular" category="popular" />
      {/* <MovieLoader title="Popular" /> */}
    </>
  );
}
