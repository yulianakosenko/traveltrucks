import styles from "./Gallery.module.css";

export default function Gallery({ images = [] }) {
  if (!Array.isArray(images) || images.length === 0) return null;

  return (
    <div className={styles.gallery}>
      {images.slice(0, 4).map((img, index) => (
        <div key={index} className={styles.imageWrap}>
          <img src={img.original} alt={`Camper ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
