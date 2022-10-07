import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Text,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function BarDataChart({ data, data1, data2 }) {
  return (
    <BarChart width={835} height={320} barSize={7} data={data}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="day" />
      <YAxis orientation="right" tickCount={3} axisLine={false} />
      <Tooltip
        contentStyle={{
          color: "white",
          background: "#E60000",
          fontSize: "7px",
        }}
        labelStyle={{
          display: "none",
        }}
        itemStyle={{ color: "white", fontSize: "7px" }}
        wrapperStyle={{ fontSize: "7px" }}
      />
      <Legend
        verticalAlign="top"
        align="right"
        iconType="circle"
        color="#7479BC"
      />
      <Text>Activité quotidienne</Text>
      <Bar dataKey={data1.key} fill={data1.color} />
      <Bar dataKey={data2.key} fill={data2.color} />
    </BarChart>
  );
}

export default BarDataChart;
