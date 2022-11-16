import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
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

/**
 * A wrapper around the BarChart component from recharts
 * @param BarChartProps data to display (data), color and configuration of bars (bars)
 * @returns the layout of a bar chart component containing one or several bars.
 */
function BarChartComponent({ data, bars }) {
  const renderLegend = () => {
    return (
      <div className={styles.header}>
        <p className={styles.title}>Activité quotidienne</p>
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
      </div>
    );
  };

  return (
    <ResponsiveContainer height={320}>
      <BarChart
        barSize={7}
        data={data}
        style={{
          backgroundColor: "#FBFBFB",
          borderRadius: "5px",
        }}
        margin={{ top: 24, left: 24, right: 24 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" />
        <YAxis
          yAxisId="kilogram"
          orientation="right"
          tickCount={3}
          axisLine={false}
        />
        <YAxis
          yAxisId="calories"
          orientation="left"
          tickCount={3}
          axisLine={false}
          hide
        />
        <Tooltip content={renderTooltip} />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          color="#7479BC"
          content={renderLegend}
        />

        {bars.map((bar) => (
          <Bar
            dataKey={bar.key}
            fill={bar.color}
            key={bar.key}
            yAxisId={bar.key}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
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
