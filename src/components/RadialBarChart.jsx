import { Legend, RadialBar, RadialBarChart } from "recharts";
import styles from "../styles/components/RadialBarChart.module.scss";

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
    <RadialBarChart
      innerRadius={0}
      outerRadius={159}
      width={258}
      height={263}
      data={data}
      barSize={10}
      style={{ backgroundColor: "#fbfbfb" }}
      startAngle={90}
      endAngle={450}
    >
      <RadialBar dataKey="todayScore" legendType="none" label={renderLabel} />
      <Legend content={renderLegend} verticalAlign="top" />
    </RadialBarChart>
  );
}

export default RadialBarChartComponent;
