import styles from "../styles/components/Tooltip.module.scss";
import { PropTypes } from "prop-types";

function CustomTooltip({ color, children }) {
  return <div className={`${styles.tooltip} ${styles[color]}`}>{children}</div>;
}

CustomTooltip.propTypes = {
  color: PropTypes.string,
};

export default CustomTooltip;
