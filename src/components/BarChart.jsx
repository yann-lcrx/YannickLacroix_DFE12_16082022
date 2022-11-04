import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "./Tooltip";
import styles from "../styles/components/BarChart.module.scss";

function renderTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <CustomTooltip color="red">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </CustomTooltip>
    );
  }

  return null;
}

function BarChartComponent({ data, data1, data2 }) {
  const renderLegend = () => {
    return (
      <ul className={styles.legend}>
        <li>
          <img src="/black-oval.svg" alt="" />
          Poids (kg)
        </li>

        <li>
          <img src="/red-oval.svg" alt="" />
          Calories brûlées (kCal)
        </li>
      </ul>
    );
  };

  return (
    <BarChart
      width={835}
      height={320}
      barSize={7}
      data={data}
      style={{
        backgroundColor: "#FBFBFB",
        borderRadius: "5px",
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="day" />
      <YAxis orientation="right" tickCount={3} axisLine={false} />
      <Tooltip content={renderTooltip} />
      <Legend
        verticalAlign="top"
        align="right"
        iconType="circle"
        color="#7479BC"
        content={renderLegend}
      />
      <Bar dataKey={data1.key} fill={data1.color} />
      <Bar dataKey={data2.key} fill={data2.color} />
    </BarChart>
  );
}

export default BarChartComponent;
