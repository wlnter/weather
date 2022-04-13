import './index.css'
import { getIcon, getTime } from '../../util'
import { useNavigate } from "react-router-dom";
import Temperature from '../temperature'

export default (props) => {
    const { location, weather } = props
    const [id, city = '--', province = "--" ] = location || []
    const { temp = "", text = "", windDir = "" } = weather || {}
    const tag = [{name: windDir, color: `rgba(212, 66, 111, 0.5)`, width: `72px`}, {name: text, color: `rgba(106, 117, 186, 0.5)`, width: `50px`}]
    
    const navigate = useNavigate();

    return (
      <div className="major-box">
        <img
          src={getIcon(text)}
          className="major-image"
        />
        <div className="major-location">{`${city}, ${province}`}</div>
        <div className="major-content">
          <div className="major-info">
            <Temperature num={temp} size={'medium'} />
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