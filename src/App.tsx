import "./styles.css";
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380
  }
];

export default function App() {
  return (
    <ComposedChart
      width={800}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 80,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis
        dataKey="name"
        label={{ position: "insideBottomRight", offset: 0 }}
        scale="band"
        axisLine={false}
        tickLine={false}
        style={{ fontSize: "11px" }}
        tick={{ fill: "#BDCFDD" }}
      />
      <YAxis
        label={{ angle: -90, position: "insideLeft" }}
        axisLine={false}
        tickLine={false}
        style={{ fontSize: "11px" }}
        tick={{ fill: "#BDCFDD" }}
      />
      <Tooltip />
      {/* <Legend /> */}
      <Area
        type="monotone"
        dataKey="amt"
        fill="rgba(2, 195, 154, 0.20)"
        stroke="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="pv"
        fill="rgba(0, 137, 209, 0.20)"
        stroke="#8884d8"
      />
      {/* <Bar dataKey="pv" barSize={20} fill="#413ea0" /> */}
      <Line
        dot={false}
        type="monotone"
        dataKey="pv"
        stroke="#0089D1"
        strokeWidth={2}
      />
      <Line
        dot={false}
        type="monotone"
        dataKey="amt"
        stroke="#02C39A"
        strokeWidth={2}
      />
    </ComposedChart>
  );
}
