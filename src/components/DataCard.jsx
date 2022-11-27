import styles from "../styles/components/DataCard.module.scss";

function DataCard({ figure, unit, type, iconSource }) {
  return (
    <div className={styles.DataCard}>
      <img src={iconSource} alt={type} />
      <div>
        <p className={styles.figure}>
          {figure}
          {unit}
        </p>
        <p className={styles.nutrient}>{type}</p>
      </div>
    </div>
  );
}

export default DataCard;
