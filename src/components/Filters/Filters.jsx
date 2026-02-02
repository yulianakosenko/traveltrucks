import { useDispatch, useSelector } from "react-redux";
import {
  setLocation,
  toggleEquipment,
  setVehicleType,
} from "../../redux/filtersSlice";

import styles from "./filters.module.css";
import mapIcon from "../../assets/images/map.svg";

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
          <img src={mapIcon} alt="" />
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
          {["AC", "Automatic", "Kitchen", "TV", "Bathroom"].map((item) => (
            <button
              key={item}
              className={equipment.includes(item) ? styles.active : ""}
              onClick={() => dispatch(toggleEquipment(item))}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* TYPE */}
      <div className={styles.filterSection}>
        <h3>Vehicle type</h3>
        <div className={styles.filterRow}>
          {["van", "fully", "alcove"].map((type) => (
            <button
              key={type}
              className={vehicleType === type ? styles.active : ""}
              onClick={() => dispatch(setVehicleType(type))}
              type="button"
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
