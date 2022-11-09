import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/MovieCard/MovieCard";
import { fetchTrending } from "../features/movies/movieSlice";
import styles from "./Trending.module.css";

const Trending = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);

  useEffect(() => {
    dispatch(fetchTrending());
  }, []);

  return (
    <main>
      <h1 className={styles.heading}>24h YIFY Trending Movies</h1>
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

export default Trending;
