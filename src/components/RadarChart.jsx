import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

function RadarChartComponent({ data }) {
  return (
    <RadarChart
      width={258}
      height={263}
      data={data}
      style={{
        backgroundColor: "#282D30",
        borderRadius: "5px",
      }}
    >
      <PolarGrid outerRadius={200} strokeWidth={2} />
      <PolarAngleAxis
        dataKey="kind"
        stroke="white"
        style={{ fontWeight: "500" }}
        type="category"
        axisLine={false}
      />
      <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
    </RadarChart>
  );
}

export default RadarChartComponent;
