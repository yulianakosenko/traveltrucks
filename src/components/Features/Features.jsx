import styles from "./Features.module.css";

const FEATURES = [
  {
    key: "transmission",
    getLabel: (value) => (value === "automatic" ? "Automatic" : value),
    icon: "/icons/diagram11.svg",
  },
  {
    key: "engine",
    getLabel: (value) => (value === "diesel" ? "Diesel" : "Petrol"),
    icon: "/icons/fuel-pump.svg",
  },
  { key: "AC", getLabel: () => "AC", icon: "/icons/wind.svg" },
  { key: "kitchen", getLabel: () => "Kitchen", icon: "/icons/cuphot.svg" },
  { key: "TV", getLabel: () => "TV", icon: "/icons/tv.svg" },
  { key: "bathroom", getLabel: () => "Bathroom", icon: "/icons/ph_shower.svg" },
  {
    key: "refrigerator",
    getLabel: () => "Fridge",
    icon: "/icons/fridge.svg",
  },
  {
    key: "microwave",
    getLabel: () => "Microwave",
    icon: "/icons/microwave.svg",
  },
  { key: "gas", getLabel: () => "Gas", icon: "/icons/gas.svg" },
  { key: "water", getLabel: () => "Water", icon: "/icons/water.svg" },
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
        {FEATURES.map(({ key, getLabel, icon }) => {
          const value = camper[key];
          if (!value) return null;

          return (
            <span key={key} className={styles.badge}>
              <img src={icon} alt="" />
              {getLabel(value)}
            </span>
          );
        })}
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
