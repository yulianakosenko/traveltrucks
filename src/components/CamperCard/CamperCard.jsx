import styles from "./CamperCard.module.css";

export default function CamperCard({ camper }) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        {/* IMAGE */}
        <div className={styles.imageWrap}>
          <img src={camper.image} alt={camper.name} />
        </div>

        {/* INFO */}
        <div className={styles.info}>
          {/* TITLE + PRICE */}
          <div className={styles.titleRow}>
            <h2 className={styles.title}>{camper.name}</h2>

            <div className={styles.price}>
              <span>€{camper.price}</span>
              <button className={styles.favoriteBtn} aria-label="favorite" />
            </div>
          </div>

          {/* META */}
          <div className={styles.meta}>
            <div className={styles.reviews}>
              <span className={styles.starIcon} />
              <span>
                {camper.rating} ({camper.reviews})
              </span>
            </div>

            <div className={styles.location}>
              <span className={styles.mapIcon} />
              <span>{camper.location}</span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className={styles.description}>{camper.description}</p>

          {/* BADGES */}
          <div className={styles.badges}>
            <span className={styles.badge}>AC</span>
            <span className={styles.badge}>Petrol</span>
            <span className={styles.badge}>Kitchen</span>
            <span className={styles.badge}>TV</span>
          </div>

          {/* BUTTON */}
          <button className={styles.showMore}>Show more</button>
        </div>
      </div>
    </article>
  );
}
