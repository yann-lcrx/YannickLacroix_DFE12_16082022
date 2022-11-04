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
        width={229}
        height={247}
        data={data}
        style={{
          backgroundColor: "#FF0000",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          padding: "0 14px 16px 14px",
        }}
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
    </div>
  );
}

export default LineChartComponent;
