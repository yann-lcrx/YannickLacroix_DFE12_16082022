import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

function LineChartComponent({ data, dataKey }) {
  return (
    <LineChart
      width={258}
      height={263}
      data={data}
      margin={{ top: 29, bottom: 16 }}
      style={{ backgroundColor: "#FF0000", borderRadius: "5px" }}
    >
      <XAxis
        dataKey="day"
        axisLine={false}
        tickLine={false}
        tickCount={7}
        tick={{ fill: "#FFF", fontWeight: "500" }}
      />
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
