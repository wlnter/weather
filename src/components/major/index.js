import styles from './index.module.css'
import { getIcon, getHour, getDay } from '../../util'
import { useNavigate } from "react-router-dom";
import Temperature from '../temperature'

export default (props) => {
    const { location, weather } = props
    const [id, city = '--', province = "--" ] = location || []
    const { temp, text = "", windDir = "" } = weather || {}
    const tag = [{name: windDir, color: `rgba(212, 66, 111, 0.5)`, width: `72px`}, {name: text, color: `rgba(106, 117, 186, 0.5)`, width: `50px`}]
    
    const navigate = useNavigate();

    return (
      <div className={styles["major-box"]}>
        {text && <img src={getIcon(text)} className={styles["major-image"]} />}
        <div className={styles["major-location"]}>{`${city}, ${province}`}</div>
        <div className={styles["major-content"]}>
          <div className={styles["major-info"]}>
            <Temperature num={temp} size={"medium"} />
            <div
              className={styles["major-time"]}
            >{`${getDay()}, ${getHour()}`}</div>
          </div>
          <div className={styles["major-tag"]}>
            {tag.map((item, index) => {
              const { name, width, color } = item;
              if (name) {
                return (
                  <div
                    key={index}
                    className={styles["major-tag-item"]}
                    style={{ width, backgroundColor: color }}
                  >
                    <div className={styles["major-tag-text"]}>{name}</div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div
          onClick={() => navigate("/weather/forecast")}
          className={styles["major-button"]}
        >
          <div className={styles["major-button-text"]}>详情</div>
        </div>
      </div>
    );
}