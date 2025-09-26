import { useEffect, useState } from "react";
import MovieLoaderCard from "./MovieCardLoader";
import MovieListItem from "./MovieListItem";
import { axiosInstance } from "../api/axiosInstance";
import MovieCardError from "./MovieCardError";

// prop 타입을 정의합니다.
interface MovieListProps {
  category: "now_playing" | "upcoming" | "popular";
  title: string;
}

// MovieList 컴포넌트에서 category와 title을 prop으로 받습니다.
export default function MovieList({ category, title }: MovieListProps) {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const {
          data: { results },
        } = await axiosInstance.get(category); // category prop을 사용합니다.
        setMovies(results);
      } catch (e) {
        setError((e instanceof Error && e.message) || "unknown error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [category]); // 의존성 배열을 category로 변경합니다.

  return (
    <>
      <article className="bg-black px-4 pt-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">{title}</h2>{" "}
          {/* title prop을 사용합니다. */}
          {error && <MovieCardError error={error} />}
          {!error && (
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
              {isLoading &&
                Array.from({ length: 20 }).map((_, index) => (
                  <MovieLoaderCard key={index} />
                ))}{" "}
              {/* 로딩 중일 때 20개의 스켈레톤을 표시합니다. */}
              {!isLoading &&
                movies.map((movie) => (
                  <MovieListItem key={movie.id} {...movie} />
                ))}
            </div>
          )}
        </section>
      </article>
    </>
  );
}
