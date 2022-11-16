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

/**
 * A wrapper around the recharts radial bar chart.
 * @param RadialBarChartProps data to display
 * @returns the layout of a radial bar chart with several categories.
 */
function RadialBarChartComponent({ data }) {
  const renderLegend = (props) => {
    console.log(props.payload);
    if (props) {
      return (
        <div className={styles.legend}>
          <p className={styles.percentage}>
            {props.payload[1].payload.todayScore * 100}%
          </p>
          <p>de votre objectif</p>
        </div>
      );
    } else return;
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
        <Legend content={renderLegend} verticalAlign="middle" align="center" />
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
