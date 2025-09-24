import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieLoader from "./MovieLoader";
import MovieMain from "./MovieMain";

export default function Movie() {
  return (
    <>
      <MovieHeader />
      <MovieMain />
      <MovieList />
      <MovieLoader title="Popular" />
    </>
  );
}
