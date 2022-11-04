import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "./Tooltip";
import styles from "../styles/components/BarChart.module.scss";
import PropTypes from "prop-types";

function renderTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <CustomTooltip color="red">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </CustomTooltip>
    );
  }

  return null;
}

function BarChartComponent({ data, bars }) {
  const renderLegend = () => {
    return (
      <ul className={styles.legend}>
        <li>
          <img src="/black-oval.svg" alt="" />
          Poids (kg)
        </li>

        <li>
          <img src="/red-oval.svg" alt="" />
          Calories brûlées (kCal)
        </li>
      </ul>
    );
  };

  return (
    <BarChart
      width={835}
      height={320}
      barSize={7}
      data={data}
      style={{
        backgroundColor: "#FBFBFB",
        borderRadius: "5px",
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="day" />
      <YAxis orientation="right" tickCount={3} axisLine={false} />
      <Tooltip content={renderTooltip} />
      <Legend
        verticalAlign="top"
        align="right"
        iconType="circle"
        color="#7479BC"
        content={renderLegend}
      />

      {bars.map((bar) => (
        <Bar dataKey={bar.key} fill={bar.color} key={bar.key} />
      ))}
    </BarChart>
  );
}

BarChartComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
  bars: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      color: PropTypes.string,
    })
  ),
};

export default BarChartComponent;
