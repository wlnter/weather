
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
} from "recharts";

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;
  const { value } = payload
  if(value == 'auto'){
    return null
  }
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        fontFamily="Alegreya Sans"
        fontSize="14"
        textAnchor="end"
        fill="rgba(51, 40, 33, 0.5)"
      >
        {value}
      </text>
    </g>
  );
};

export default (props)=> {
  return (
    <AreaChart
      width={375}
      height={110}
      data={props.data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <Area
        type="monotone"
        dataKey="num"
        stroke="#E9C939"
        fill="rgba(233, 201, 57, 0.25)"
      />
      <XAxis
        dataKey="hour"
        tick={<CustomizedAxisTick />}
        axisLine={false}
        tickLine={false}
      />
    </AreaChart>
  );
}