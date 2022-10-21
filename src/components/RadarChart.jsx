import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

function RadarChartComponent({ data }) {
  const transparentRed = `rgba(2)`;

  return (
    <RadarChart
      outerRadius={90}
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
      <Radar dataKey="value" fill="rgba(255,1,1,0.7)" fillOpacity={0.6} />
    </RadarChart>
  );
}

export default RadarChartComponent;
