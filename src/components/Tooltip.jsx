import styles from "../styles/components/Tooltip.module.scss";
import { PropTypes } from "prop-types";

/**
 * Customizable tooltip used in the recharts components.
 * @param TooltipProps tooltip background color (don't forget to assign CSS rules to the color you are passing) and React children
 * @returns a simple JSX tooltip
 */
function CustomTooltip({ color, children }) {
  return <div className={`${styles.tooltip} ${styles[color]}`}>{children}</div>;
}

CustomTooltip.propTypes = {
  color: PropTypes.string,
};

export default CustomTooltip;
