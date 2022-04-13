import './forecast.css'
import back from '../assets/back-arrow.svg'
import { useNavigate } from "react-router-dom";
import Tags from '../components/tag'
import ReactECharts from "echarts-for-react";
import Temperature from '../components/temperature';
import TemperatureList from '../components/temperature-list'
import ForecastList from '../components/forecast-list/';
import { getIcon } from '../util';

const tempList = [{num: 12, hour: "10am"}, {num: 14, hour: "11am"}, {num: 10, hour: '12am'}]
const forecastList = [
  {
    date: "周一",
    icon: "https://gw.alicdn.com/imgextra/i2/O1CN01qm3EDd1TeS4x5UKhr_!!6000000002407-2-tps-100-100.png",
    range: [12, 15],
  },
  {
    date: "周一",
    icon: "https://gw.alicdn.com/imgextra/i2/O1CN01qm3EDd1TeS4x5UKhr_!!6000000002407-2-tps-100-100.png",
    range: [12, 15],
  },
  {
    date: "周一",
    icon: "https://gw.alicdn.com/imgextra/i2/O1CN01qm3EDd1TeS4x5UKhr_!!6000000002407-2-tps-100-100.png",
    range: [12, 15],
  },
  {
    date: "周一",
    icon: "https://gw.alicdn.com/imgextra/i2/O1CN01qm3EDd1TeS4x5UKhr_!!6000000002407-2-tps-100-100.png",
    range: [12, 15],
  },
];

const option = {
  title: {
    text: "Today",
    subtext: "",
  },
  tooltip: {
    trigger: "axis",
  },
  toolbox: {
    show: false,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "温度",
      type: "line",
      smooth: true,
      itemStyle: { normal: { areaStyle: { type: "default" } } },
      data: [30, 182, 434, 791, 390, 30, 10],
    },
  ],
};
                    
export default (props) => {
  const [id, city, province] = props.location
  const { temp, text, windDir, windSpeed, humidity, precip } = props.weather

  const navigate = useNavigate();
  return (
    <div className="forecast-app">
      <img
        onClick={() => {
          navigate("/");
        }}
        src={back}
        className="back-arrow"
      />
      {text && <img
        src={getIcon(text)}
        className="weather-icon"
      />}
      <div className="location">
        <div className="location-text">{`${city},`}</div>
        <div className="location-text">{province}</div>
      </div>
      <Temperature size="large" num={temp} styles={{ marginLeft: "20px" }} />
      <Tags weather={props.weather} />
      <div style={{ width: "20px", height: "20px" }} />
      <TemperatureList data={tempList} />
      {/* <ReactECharts option={option} /> */}
      <div style={{ width: "20px", height: "20px" }} />
      <ForecastList data={props.forecast} />
    </div>
  );
}
