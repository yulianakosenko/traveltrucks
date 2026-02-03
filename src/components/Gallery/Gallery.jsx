import styles from "./Gallery.module.css";

export default function Gallery({ images = [] }) {
  if (!Array.isArray(images) || images.length === 0) return null;

  return (
    <div className={styles.gallery}>
      {images.map((img, index) => (
        <img key={index} src={img.original} alt={`Camper ${index + 1}`} />
      ))}
    </div>
  );
}
