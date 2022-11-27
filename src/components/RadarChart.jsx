import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

/**
 * A wrapper around the recharts radar chart.
 * @param RadarChartProps data to display
 * @returns the layout for an svg radar chart.
 */
function RadarChartComponent({ data }) {
  return (
    <ResponsiveContainer height="100%">
      <RadarChart
        data={data}
        style={{
          backgroundColor: "#282D30",
          borderRadius: "5px",
        }}
        margin={{ top: 6, bottom: 6, left: 39, right: 39 }}
      >
        <PolarGrid strokeWidth={1} stroke="white" />
        <PolarAngleAxis
          dataKey="kind"
          stroke="white"
          style={{ fontWeight: "500", fontSize: "12px" }}
          type="category"
          tickLine={false}
          tick={{ fontSize: "12px" }}
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
