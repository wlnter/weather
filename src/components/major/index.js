import './index.css'
import { getTime } from '../../util'
import { useNavigate } from "react-router-dom";

export default (props) => {
    const { location, weather } = props
    const [id, city = '--', province = "--" ] = location || []
    const { temp = "", text = "", windDir = "" } = weather || {}
    const tag = [{name: windDir, color: `rgba(212, 66, 111, 0.5)`, width: `72px`}, {name: text, color: `rgba(106, 117, 186, 0.5)`, width: `50px`}]
    
    const navigate = useNavigate();

    return (
      <div className="major-box">
        <img
          src={"https://s3.bmp.ovh/imgs/2022/04/11/28da5e75730d747f.png"}
          className="major-image"
        />
        <div className="major-location">{`${city}, ${province}`}</div>
        <div className="major-content">
          <div className="major-info">
            <div className="major-temp">
              {temp && <div className="major-temp-num">{temp}</div>}
              {temp && <div className="major-temp-unit">°C</div>}
            </div>

            <div className="major-time">{getTime()}</div>
          </div>
          <div className="major-tag">
            {tag.map((item, index) => {
              const { name, width, color } = item;
              if (name) {
                return (
                  <div
                    key={index}
                    className="major-tag-item"
                    style={{ width, backgroundColor: color }}
                  >
                    <div className="major-tag-text">{name}</div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="major-button">
          <div onClick={() => navigate("/forecast")} className="major-button-text">
            详情
          </div>
        </div>
      </div>
    );
}