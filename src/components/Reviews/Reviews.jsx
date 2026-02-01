import styles from "./Reviews.module.css";

export default function Reviews({ reviews = [] }) {
  return (
    <div className={styles.wrapper}>
      <h3>Reviews</h3>

      {reviews.map((review, index) => (
        <div key={index} className={styles.review}>
          <strong>{review.reviewer_name}</strong>

          <div className={styles.stars}>
            {"★".repeat(review.reviewer_rating)}
            {"☆".repeat(5 - review.reviewer_rating)}
          </div>

          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
