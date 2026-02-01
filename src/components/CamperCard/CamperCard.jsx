import styles from "./CamperCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favoritesSlice";

export default function CamperCard({ camper }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const isFavorite = favorites.includes(camper.id);

  return (
    <div className={styles.card}>
      <img
        src={camper.gallery?.[0]}
        alt={camper.name}
        className={styles.image}
      />

      <div className={styles.content}>
        <div className={styles.header}>
          <h3>{camper.name}</h3>
          <button
            className={styles.favorite}
            onClick={() => dispatch(toggleFavorite(camper.id))}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>

        <p className={styles.location}>{camper.location}</p>

        <p className={styles.price}>
          € {camper.price.toFixed(2).replace(".", ",")}
        </p>

        <button
          className={styles.more}
          onClick={() => window.open(`/catalog/${camper.id}`, "_blank")}
        >
          Show more
        </button>
      </div>
    </div>
  );
}
