import styles from "./TrustBar.module.css";

const items = [
  "Zero commission",
  "Free account setup",
  "You own everything",
  "Start in 2 hours",
];
const checkmark = "\u2713";

export default function TrustBar() {
  return (
    <div className={styles.bar}>
      <div className={`${styles.track} ${styles.desktop}`}>
        {items.map((item) => (
          <span key={item} className={styles.item}>
            {checkmark} {item}
          </span>
        ))}
      </div>
      <div className={`${styles.track} ${styles.mobile}`}>
        {items.concat(items).map((item, index) => (
          <span key={`${item}-${index}`} className={styles.item}>
            {checkmark} {item}
          </span>
        ))}
      </div>
    </div>
  );
}
