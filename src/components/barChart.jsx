import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function BarDataChart({ data, data1, data2 }) {
  return (
    <BarChart width={835} height={320} barSize={7} data={data}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="day" />
      <YAxis orientation="right" tickCount={3} />
      <Tooltip />
      <Legend
        verticalAlign="top"
        align="right"
        iconType="circle"
        color="#7479BC"
      />
      <Bar dataKey={data1.key} fill={data1.color} />
      <Bar dataKey={data2.key} fill={data2.color} />
    </BarChart>
  );
}

export default BarDataChart;
