import { useDispatch, useSelector } from "react-redux";
import {
  setLocation,
  toggleEquipment,
  setVehicleType,
} from "../../redux/filtersSlice";

import styles from "./Filters.module.css";

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
            value={location}
            placeholder="Kyiv, Ukraine"
            onChange={(e) => dispatch(setLocation(e.target.value))}
          />
        </div>
      </div>

      <p className={styles.filterTitle}>Filters</p>

      {/* EQUIPMENT */}
      <div className={styles.filterSection}>
        <h3>Vehicle equipment</h3>
        <div className={styles.filterRow}>
          {[
            { label: "AC", icon: "/icons/wind.svg" },
            { label: "Automatic", icon: "/icons/diagram11.svg" },
            { label: "Kitchen", icon: "/icons/cuphot.svg" },
            { label: "TV", icon: "/icons/tv.svg" },
            { label: "Bathroom", icon: "/icons/ph_shower.svg" },
          ].map(({ label, icon }) => (
            <button
              key={label}
              className={equipment.includes(label) ? styles.active : ""}
              onClick={() => dispatch(toggleEquipment(label))}
              type="button"
            >
              <img src={icon} alt={label} className={styles.icon} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* TYPE */}
      <div className={styles.filterSection}>
        <h3>Vehicle type</h3>
        <div className={styles.filterRow}>
          {[
            { label: "Van", icon: "/icons/bi_grid-1x2.svg" },
            { label: "Fully integrated", icon: "/icons/bi_grid.svg" },
            { label: "Alcove", icon: "/icons/bi_grid-3x3-gap.svg" },
          ].map(({ label, icon }) => (
            <button
              key={label}
              className={vehicleType === label ? styles.active : ""}
              onClick={() => dispatch(setVehicleType(label))}
              type="button"
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
