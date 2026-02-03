import styles from "./CamperCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toggleFavorite } from "../../redux/favoritesSlice";
import CamperBadges from "../CamperBadges/CamperBadges";

export default function CamperCard({ camper }) {
  if (!camper) return null;

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.includes(camper.id);

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        {/* IMAGE */}
        <div className={styles.imageWrap}>
          <img src={camper.gallery?.[0]?.thumb} alt={camper.name} />
        </div>

        {/* INFO */}
        <div className={styles.info}>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>{camper.name}</h2>

            {/* FAVORITE BADGE */}
            {isFavorite && (
              <Link to="/favorites" className={styles.savedBadge}>
                In favorites
              </Link>
            )}

            <div className={styles.price}>
              <span>€{camper.price.toFixed(2)}</span>

              {/* FAVORITE BUTTON */}
              <button
                type="button"
                className={`${styles.favoriteBtn} ${
                  isFavorite ? styles.active : ""
                }`}
                onClick={() => dispatch(toggleFavorite(camper.id))}
                aria-label="Add to favorites"
              >
                <img src="/icons/heart.svg" alt="Favorite" />
              </button>
            </div>
          </div>

          <div className={styles.meta}>
            <Link
              to={`/catalog/${camper.id}?tab=reviews`}
              className={styles.reviewsLink}
            >
              {camper.rating} ({camper.reviews.length} Reviews)
            </Link>
            <span>📍 {camper.location}</span>
          </div>

          <p className={styles.description}>{camper.description}</p>

          {/* ✅ ЄДИНІ BADGES */}
          <CamperBadges camper={camper} />

          <a
            href={`/catalog/${camper.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.showMore}
          >
            Show more
          </a>
        </div>
      </div>
    </article>
  );
}
