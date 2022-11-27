import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import styles from "../styles/components/LineChart.module.scss";
import CustomTooltip from "./Tooltip";
import PropTypes from "prop-types";

function renderTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <CustomTooltip color="white">
        <p>{`${payload[0].value} min`}</p>
      </CustomTooltip>
    );
  }

  return null;
}

function renderLegend() {
  return <p className={styles.legend}>Durée moyenne des sessions</p>;
}

/**
 * A wrapper around the recharts LineChart component.
 * @param LineChartProps data to display (data), the type of data corresponding to the line (dataKey)
 * @returns the layout of a line chart containing a single line
 */
function LineChartComponent({ data, dataKey }) {
  return (
    <ResponsiveContainer height="100%">
      <LineChart
        data={data}
        style={{
          backgroundColor: "#FF0000",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
        }}
        margin={{ left: 14, right: 14, bottom: 16 }}
      >
        <Legend content={renderLegend} verticalAlign="top" />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tickCount={7}
          tick={{
            fill: "rgba(255,255,255,0.6)",
            fontWeight: "500",
            fontSize: "12px",
          }}
        />
        <Tooltip content={renderTooltip} />

        <Line
          type="natural"
          dataKey={dataKey}
          dot={false}
          activeDot={true}
          strokeWidth={2}
          stroke={"#fff"}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

LineChartComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      sessionLength: PropTypes.number,
    })
  ),
  dataKey: PropTypes.string,
};

export default LineChartComponent;
