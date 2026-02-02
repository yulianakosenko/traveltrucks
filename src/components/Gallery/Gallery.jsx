export default function Gallery({ images = [] }) {
  if (!Array.isArray(images) || images.length === 0) return null;

  const firstImage = images[0];

  const src = typeof firstImage === "string" ? firstImage : firstImage.thumb;

  return <img src={src} alt="Camper" />;
}
