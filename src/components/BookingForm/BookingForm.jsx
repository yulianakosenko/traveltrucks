import { useState } from "react";
import styles from "./BookingForm.module.css";

export default function BookingForm() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    e.target.reset();
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name*"
          required
          className={styles.input}
        />

        <input
          type="email"
          placeholder="Email*"
          required
          className={styles.input}
        />

        <input type="date" required className={styles.input} />

        <textarea placeholder="Comment" rows="4" className={styles.textarea} />

        <button type="submit" className={styles.submit}>
          Send
        </button>

        {success && (
          <p className={styles.successMessage}>
            Booking request sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}
