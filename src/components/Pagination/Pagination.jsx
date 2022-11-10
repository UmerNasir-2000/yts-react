import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { incrementPage, decrementPage } from "../../features/movies/movieSlice";
import styles from "./Pagination.module.css";

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.movie.page);

  const prevClickHandler = () => {
    dispatch(decrementPage());
  };

  const nextClickHandler = () => {
    dispatch(incrementPage());
  };

  return (
    <div className={styles.container}>
      <button className="btn" disabled={page === 1} onClick={prevClickHandler}>
        Prev
      </button>
      <button className="btn" onClick={nextClickHandler}>
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  pages: PropTypes.number,
};

export default Pagination;
