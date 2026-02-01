import styles from "./Features.module.css";

const FEATURES = [
  "transmission",
  "engine",
  "AC",
  "bathroom",
  "kitchen",
  "TV",
  "radio",
  "refrigerator",
  "microwave",
  "gas",
  "water",
];

const DETAILS = ["form", "length", "width", "height", "tank", "consumption"];

export default function Features({ camper }) {
  return (
    <div className={styles.wrapper}>
      <h3>Features</h3>
      <div className={styles.list}>
        {FEATURES.map((key) => camper[key] && <span key={key}>{key}</span>)}
      </div>

      <h3>Vehicle details</h3>
      <ul className={styles.details}>
        {DETAILS.map(
          (key) =>
            camper[key] && (
              <li key={key}>
                <strong>{key}:</strong> {camper[key]}
              </li>
            ),
        )}
      </ul>
    </div>
  );
}
