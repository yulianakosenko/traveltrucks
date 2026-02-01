import styles from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import { fetchCampers, resetCampers } from "../../redux/campersSlice";

export default function Filters() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const onChange = (name, value) => {
    dispatch(resetCampers());
    dispatch(setFilter({ name, value }));
    dispatch(fetchCampers());
  };

  return (
    <div className={styles.filters}>
      <input
        className={styles.input}
        placeholder="Location"
        value={filters.location}
        onChange={(e) => onChange("location", e.target.value)}
      />

      <div className={styles.chips}>
        <button
          className={`${styles.chip} ${filters.AC ? styles.active : ""}`}
          onClick={() => onChange("AC", !filters.AC)}
        >
          AC
        </button>

        <button
          className={`${styles.chip} ${filters.kitchen ? styles.active : ""}`}
          onClick={() => onChange("kitchen", !filters.kitchen)}
        >
          Kitchen
        </button>
      </div>
    </div>
  );
}
