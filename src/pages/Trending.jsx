import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrending } from "../features/movies/movieSlice";

const Trending = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);
  console.log(`🚀 ~ movies`, movies);

  useEffect(() => {
    dispatch(fetchTrending());
  }, []);
  return <div>Trending</div>;
};

export default Trending;
