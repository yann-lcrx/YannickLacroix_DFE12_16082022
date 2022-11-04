import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

function RadarChartComponent({ data }) {
  return (
    <ResponsiveContainer height={263}>
      <RadarChart
        data={data}
        style={{
          backgroundColor: "#282D30",
          borderRadius: "5px",
        }}
      >
        <PolarGrid outerRadius={200} strokeWidth={2} />
        <PolarAngleAxis
          dataKey="kind"
          stroke="white"
          style={{ fontWeight: "500" }}
          type="category"
          axisLine={false}
        />
        <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

RadarChartComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.string,
    })
  ),
};

export default RadarChartComponent;
