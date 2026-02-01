import styles from "./Gallery.module.css";

export default function Gallery({ images = [] }) {
  return (
    <div className={styles.gallery}>
      {images.map((img, index) => (
        <img key={index} src={img} alt="" />
      ))}
    </div>
  );
}
