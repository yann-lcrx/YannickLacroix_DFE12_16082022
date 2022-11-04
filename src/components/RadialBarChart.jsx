import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import styles from "../styles/components/RadialBarChart.module.scss";
import PropTypes from "prop-types";

const renderLabel = (props, context) => {
  if (props.payload !== undefined && props.payload.length > 0) {
    return <div>Hello world</div>;
  } else {
    return "";
  }
};

function RadialBarChartComponent({ data }) {
  const renderLegend = () => {
    return <p className={styles.legend}>Score</p>;
  };

  return (
    <ResponsiveContainer height={263}>
      <RadialBarChart
        innerRadius={0}
        outerRadius={159}
        data={data}
        barSize={10}
        style={{ backgroundColor: "#fbfbfb" }}
        startAngle={90}
        endAngle={450}
      >
        <RadialBar dataKey="todayScore" legendType="none" label={renderLabel} />
        <Legend content={renderLegend} verticalAlign="top" />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

RadialBarChartComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      todayScore: PropTypes.number,
      fill: PropTypes.string,
    })
  ),
};

export default RadialBarChartComponent;
