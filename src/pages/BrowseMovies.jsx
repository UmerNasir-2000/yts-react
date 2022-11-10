import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatest } from "../features/movies/movieSlice";
import MovieCard from "../components/MovieCard/MovieCard";
import styles from "./BrowseMovies.module.css";
import Pagination from "../components/Pagination/Pagination";

const BrowseMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);
  const page = useSelector((state) => state.movie.page);
  useEffect(() => {
    dispatch(fetchLatest());
  }, [page]);

  return (
    <main>
      <Pagination />
      <section className={styles.movies}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            image={movie.medium_cover_image}
            title={movie.title}
            year={movie.year}
          />
        ))}
      </section>
    </main>
  );
};

export default BrowseMovies;
