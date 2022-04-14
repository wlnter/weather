import styles from './forecast.module.css'
import back from '../assets/back-arrow.svg'
import { useNavigate } from "react-router-dom";
import Tags from '../components/tag'
import Temperature from '../components/temperature';
import TemperatureList from '../components/temperature-list'
import ForecastList from '../components/forecast-list/';
import { getIcon } from '../util';
import AreaChart from '../components/area-chart';

const tempList = [{num: 12, hour: "10am"}, {num: 14, hour: "11am"}, {num: 10, hour: '12am'}]
                
export default (props) => {
  const { location, weather, hourForecast = [], dayForecast = [] } = props
  const [id, city, province] = location || {}
  const { temp, text, windDir, windSpeed, humidity, precip } = weather || {}

  const navigate = useNavigate();
  return (
    <div className={styles["forecast-app"]}>
      <img
        onClick={() => {
          navigate("/weather/");
        }}
        src={back}
        className={styles["back-arrow"]}
      />
      {text && <img src={getIcon(text)} className={styles["weather-icon"]} />}
      <div className={styles.location}>
        <div className={styles["location-text"]}>{`${city || "--"},`}</div>
        <div className={styles["location-text"]}>{province || "--"}</div>
      </div>
      <Temperature size="large" num={temp} styles={{ marginLeft: "20px" }} />
      <Tags weather={weather} />
      <div style={{ width: "20px", height: "20px" }} />
      <AreaChart data={hourForecast} />
      <TemperatureList data={hourForecast.slice(0, 3)} />
      <div style={{ width: "20px", height: "20px" }} />
      <ForecastList data={dayForecast} />
    </div>
  );
}
