import styles from "./Features.module.css";

const FEATURES = [
  { key: "transmission", label: "Automatic", icon: "/icons/diagram11.svg" },
  { key: "engine", label: "Petrol", icon: "/icons/fuel-pump.svg" },
  { key: "AC", label: "AC", icon: "/icons/wind.svg" },
  { key: "kitchen", label: "Kitchen", icon: "/icons/cuphot.svg" },
  { key: "TV", label: "TV", icon: "/icons/tv.svg" },
  { key: "bathroom", label: "Bathroom", icon: "/icons/ph_shower.svg" },
  { key: "refrigerator", label: "Fridge", icon: "/icons/fridge.svg" },
];

const DETAILS = [
  { key: "form", label: "Form" },
  { key: "length", label: "Length" },
  { key: "width", label: "Width" },
  { key: "height", label: "Height" },
  { key: "tank", label: "Tank" },
  { key: "consumption", label: "Consumption" },
];

export default function Features({ camper }) {
  if (!camper) return null;

  return (
    <div className={styles.wrapper}>
      {/* FEATURES */}
      <div className={styles.badges}>
        {FEATURES.map(
          ({ key, label, icon }) =>
            camper[key] && (
              <span key={key} className={styles.badge}>
                <img src={icon} alt="" />
                {label}
              </span>
            ),
        )}
        
      </div>

      {/* VEHICLE DETAILS */}
      <div className={styles.vehicle}>
        <h3 className={styles.title}>Vehicle details</h3>
        <div className={styles.divider} />

        <ul className={styles.details}>
          {DETAILS.map(
            ({ key, label }) =>
              camper[key] && (
                <li key={key}>
                  <span>{label}</span>
                  <span>{camper[key]}</span>
                </li>
              ),
          )}
        </ul>
      </div>
    </div>
  );
}
