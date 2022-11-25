import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import styles from "../styles/components/RadialBarChart.module.scss";
import PropTypes from "prop-types";

/**
 * A wrapper around the recharts radial bar chart.
 * @param RadialBarChartProps data to display
 * @returns the layout of a radial bar chart with several categories.
 */
function RadialBarChartComponent({ data }) {
  const renderLegend = (props) => {
    if (props) {
      return (
        <div className={styles.legend}>
          <div className={styles.score}>
            <p className={styles.percentage}>
              {props.payload[1].payload.todayScore * 100}%
            </p>
            <p>de votre objectif</p>
          </div>
        </div>
      );
    } else return;
  };

  return (
    <ResponsiveContainer height={263}>
      <RadialBarChart
        innerRadius={12}
        outerRadius={159}
        data={data}
        barSize={12}
        style={{ backgroundColor: "#fbfbfb" }}
        startAngle={90}
        endAngle={450}
        barGap={0}
        barCategoryGap={0}
      >
        <RadialBar dataKey="todayScore" legendType="none" cornerRadius={10} />
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
