import styles from "./CamperCard.module.css";
import { Link } from "react-router-dom";



export default function CamperCard({ camper }) {
  if (!camper) return null;
  
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

            <div className={styles.price}>
              <span>€{camper.price.toFixed(2)}</span>
              <button className={styles.favoriteBtn} />
            </div>
          </div>

          <div className={styles.meta}>
            <Link
              to={`/catalog/${camper.id}#reviews`}
              className={styles.reviewsLink}
            >
              {camper.rating} ({camper.reviews.length} Reviews)
            </Link>
            <span>📍 {camper.location}</span>
          </div>

          <p className={styles.description}>{camper.description}</p>

          <div className={styles.badges}>
            {camper.transmission && <span>{camper.transmission}</span>}
            {camper.engine && <span>{camper.engine}</span>}
            {camper.kitchen && <span>Kitchen</span>}
            {camper.AC && <span>AC</span>}
            {camper.TV && <span>TV</span>}
            {camper.bathroom && <span>Bathroom</span>}
          </div>

          <Link to={`/catalog/${camper.id}`} className={styles.showMore}>
            Show more
          </Link>
        </div>
      </div>
    </article>
  );
}
