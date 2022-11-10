import PropTypes from "prop-types";
import styles from "./MovieCard.module.css";

const MovieCard = ({ image, title, year }) => {
  return (
    <article className={styles.card}>
      <div
        className={styles.card__img}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h4 className={styles.card__title}>
        {title.length > 20 ? `${title.substring(0, 18)}...` : title}
      </h4>
      <time className={styles.card__year} dateTime="year">
        {year}
      </time>
    </article>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default MovieCard;
