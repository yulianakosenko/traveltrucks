import { useDispatch, useSelector } from "react-redux";
import {
  setLocation,
  toggleEquipment,
  setVehicleType,
} from "../../redux/filtersSlice";

import styles from "./Filters.module.css";

/* =========================
   CONFIG
========================= */

/* label — UI
   value — РЕАЛЬНЕ поле з API */
const EQUIPMENT = [
  { label: "AC", value: "AC", icon: "/icons/wind.svg" },
  { label: "Automatic", value: "automatic", icon: "/icons/diagram11.svg" },
  { label: "Kitchen", value: "kitchen", icon: "/icons/cuphot.svg" },
  { label: "TV", value: "TV", icon: "/icons/tv.svg" },
  { label: "Bathroom", value: "bathroom", icon: "/icons/ph_shower.svg" },
 
];

const VEHICLE_TYPES = [
  { label: "Van", value: "panelTruck", icon: "/icons/bi_grid-1x2.svg" },
  {
    label: "Fully integrated",
    value: "fullyIntegrated",
    icon: "/icons/bi_grid.svg",
  },
  { label: "Alcove", value: "alcove", icon: "/icons/bi_grid-3x3-gap.svg" },
];

/* =========================
   COMPONENT
========================= */

export default function Filters() {
  const dispatch = useDispatch();
  const { location, equipment, vehicleType } = useSelector(
    (state) => state.filters,
  );

  return (
    <aside className={styles.filters}>
      {/* LOCATION */}
      <div className={styles.filterBlock}>
        <p className={styles.filterSubtitle}>Location</p>

        <div className={styles.locationInput}>
          <img src="/icons/map.svg" alt="Map" />
          <input
            type="text"
            value={location}
            placeholder="Kyiv, Ukraine"
            onChange={(e) => dispatch(setLocation(e.target.value))}
          />
        </div>
      </div>

      <p className={styles.filterTitle}>Filters</p>

      {/* VEHICLE EQUIPMENT — MULTI */}
      <div className={styles.filterSection}>
        <h3>Vehicle equipment</h3>

        <div className={styles.filterRow}>
          {EQUIPMENT.map(({ label, value, icon }) => (
            <button
              key={value}
              type="button"
              className={`${styles.filterButton} ${
                equipment.includes(value) ? styles.active : ""
              }`}
              onClick={() => dispatch(toggleEquipment(value))}
            >
              <img src={icon} alt={label} className={styles.icon} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* VEHICLE TYPE — SINGLE + TOGGLE */}
      <div className={styles.filterSection}>
        <h3>Vehicle type</h3>

        <div className={styles.filterRow}>
          {VEHICLE_TYPES.map(({ label, value, icon }) => (
            <button
              key={value}
              type="button"
              className={`${styles.filterButton} ${
                vehicleType === value ? styles.active : ""
              }`}
              onClick={() =>
                dispatch(setVehicleType(vehicleType === value ? "" : value))
              }
            >
              <img src={icon} alt={label} className={styles.icon} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
