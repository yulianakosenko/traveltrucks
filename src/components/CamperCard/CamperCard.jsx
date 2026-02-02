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
              <span>€{camper.price.toFixed(2)}</span>
              <button className={styles.favoriteBtn} aria-label="favorite" />
            </div>
          </div>

          {/* META */}
          <div className={styles.meta}>
            <div className={styles.reviews}>
              <span className={styles.starIcon} />
              <span>
                {camper.rating} ({camper.reviews.length} Reviews)
              </span>
            </div>

            <div className={styles.location}>
              <span className={styles.mapIcon} />
              <span>{camper.location}</span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className={styles.description}>{camper.description}</p>

          {/* BADGES — ТІЛЬКИ ПРИМІТИВИ */}
          <div className={styles.badges}>
            {camper.transmission && (
              <span className={styles.badge}>{camper.transmission}</span>
            )}
            {camper.engine && (
              <span className={styles.badge}>{camper.engine}</span>
            )}
            {camper.kitchen && <span className={styles.badge}>Kitchen</span>}
            {camper.AC && <span className={styles.badge}>AC</span>}
            {camper.TV && <span className={styles.badge}>TV</span>}
            {camper.bathroom && <span className={styles.badge}>Bathroom</span>}
          </div>

          {/* BUTTON */}
          <button className={styles.showMore}>Show more</button>
        </div>
      </div>
    </article>
  );
}
