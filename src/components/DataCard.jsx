import styles from "../styles/components/DataCard.module.scss";
import PropTypes from "prop-types";

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

DataCard.propTypes = {
  figure: PropTypes.number,
  unit: PropTypes.string,
  type: PropTypes.string,
  iconSource: PropTypes.string,
};

export default DataCard;
