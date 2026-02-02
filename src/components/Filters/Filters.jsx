import { useDispatch, useSelector } from "react-redux";
import {
  setLocation,
  toggleEquipment,
  setVehicleType,
  fetchCampers,
} from "../../redux/campersSlice";

import styles from "./filters.module.css";

// SVG placeholders (ти заміниш на sprite)
import mapIcon from "../../assets/images/map.svg";

export default function Filters() {
  const dispatch = useDispatch();

  const { location, equipment, vehicleType } = useSelector(
    (state) => state.campers,
  );

  const handleSearch = () => {
    dispatch(fetchCampers());
  };

  return (
    <aside className={styles.filters}>
      {/* LOCATION */}
      <div className={styles.filterBlock}>
        <p className={styles.filterSubtitle}>Location</p>

        <div className={styles.locationInput}>
          <img src={mapIcon} alt="map" className={styles.locationIcon} />
          <input
            type="text"
            value={location}
            placeholder="Kyiv, Ukraine"
            onChange={(e) => dispatch(setLocation(e.target.value))}
          />
        </div>
      </div>

      {/* FILTER TITLE */}
      <p className={styles.filterTitle}>Filters</p>

      {/* VEHICLE EQUIPMENT */}
      <div className={styles.filterSection}>
        <h3 className={styles.filterHeading}>Vehicle equipment</h3>
        <div className={styles.divider} />

        <div className={styles.filterRow}>
          {[
            { key: "ac", icon: "wind", label: "AC" },
            { key: "automatic", icon: "diagram", label: "Automatic" },
            { key: "kitchen", icon: "cuphot", label: "Kitchen" },
          ].map((item) => (
            <button
              key={item.key}
              className={`${styles.filterItem} ${
                equipment[item.key] ? styles.active : ""
              }`}
              onClick={() => dispatch(toggleEquipment(item.key))}
              type="button"
            >
              <span className={`${styles.icon} ${styles[item.icon]}`} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className={styles.filterRow}>
          {[
            { key: "tv", icon: "tv", label: "TV" },
            { key: "bathroom", icon: "shower", label: "Bathroom" },
          ].map((item) => (
            <button
              key={item.key}
              className={`${styles.filterItem} ${
                equipment[item.key] ? styles.active : ""
              }`}
              onClick={() => dispatch(toggleEquipment(item.key))}
              type="button"
            >
              <span className={`${styles.icon} ${styles[item.icon]}`} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* VEHICLE TYPE */}
      <div className={styles.filterSection}>
        <h3 className={styles.filterHeading}>Vehicle type</h3>
        <div className={styles.divider} />

        <div className={styles.filterRow}>
          {[
            { key: "van", icon: "van", label: "Van" },
            {
              key: "fully",
              icon: "fully",
              label: "Fully Integrated",
            },
            { key: "alcove", icon: "alcove", label: "Alcove" },
          ].map((item) => (
            <button
              key={item.key}
              className={`${styles.filterItem} ${
                vehicleType === item.key ? styles.active : ""
              }`}
              onClick={() => dispatch(setVehicleType(item.key))}
              type="button"
            >
              <span className={`${styles.icon} ${styles[item.icon]}`} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* SEARCH */}
      <button className={styles.searchBtn} onClick={handleSearch}>
        Search
      </button>
    </aside>
  );
}
