import { CAMPER_BADGES } from "../../constants/camperBadges";
import styles from "./CamperBadges.module.css";

export default function CamperBadges({ camper }) {
  return (
    <ul className={styles.badges}>
      {CAMPER_BADGES.map((item) => {
        const value = camper[item.key];

        if (!value) return null;

        let label = item.label;

        if (item.labelMap) {
          label = item.labelMap[value] || value;
        }

        return (
          <li key={item.key} className={styles.badge}>
            {label}
          </li>
        );
      })}
    </ul>
  );
}
