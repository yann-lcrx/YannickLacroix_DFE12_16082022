import { Line, LineChart, Text, Tooltip, XAxis, YAxis } from "recharts";
import styles from "../styles/components/LineChart.module.scss";

function LineChartComponent({ data, dataKey }) {
  return (
    <LineChart
      width={258}
      height={263}
      data={data}
      margin={{ top: 29, bottom: 16 }}
      className={styles.lineChart}
      style={{ backgroundColor: "#FF0000", borderRadius: "5px" }}
    >
      <Text textAnchor="start" verticalAnchor="start" x={0} y={0}>
        Durée moyenne des sessions
      </Text>
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <YAxis hide />
      <Tooltip />
      <Line
        type="natural"
        dataKey={dataKey}
        dot={false}
        activeDot={true}
        strokeWidth={2}
        stroke={"#fff"}
      />
    </LineChart>
  );
}

export default LineChartComponent;
