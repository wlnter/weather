
import React from "react";
import { AreaChart, Area, XAxis, ResponsiveContainer } from "recharts";

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
    <div style={{width: "100%", height: '110px', position: 'relative'}}>
      <div style={{position: 'absolute', left: '20px', fontFamily:"Alegreya Sans", fontWeight: 500, fontSize: '14px', color: "#332821"}}>24 Hours</div>
      <ResponsiveContainer>
        <AreaChart
          data={props.data}
          margin={{
            top: 15,
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
      </ResponsiveContainer>
    </div>
  );
}