import styles from "../styles/components/Tooltip.module.scss";

function CustomTooltip({ color, children }) {
  return <div className={`${styles.tooltip} ${styles[color]}`}>{children}</div>;
}

export default CustomTooltip;
