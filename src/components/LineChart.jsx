import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import styles from "../styles/components/LineChart.module.scss";
import CustomTooltip from "./Tooltip";

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

function LineChartComponent({ data, dataKey }) {
  return (
    <div className={styles.lineChart}>
      <LineChart
        width={258}
        height={263}
        data={data}
        style={{
          backgroundColor: "#FF0000",
          borderRadius: "5px",
        }}
      >
        <Legend content={renderLegend} verticalAlign="top" />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tickCount={7}
          tick={{ fill: "#FFF", fontWeight: "500" }}
        ></XAxis>
        <YAxis hide />
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
    </div>
  );
}

export default LineChartComponent;
