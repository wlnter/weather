import './index.css'
import humidity from '../icon/humidity.svg'
import precip from '../icon/precip.svg'
import speed from '../icon/windSpeed.svg'
import Item from './item'
export default () => {
    const data = [{
        icon: precip,
        name: "降水量",
        data: "6 %"
    },{
        icon: humidity,
        name: "湿度",
        data: "90 %"
    },{
        icon: speed,
        name: "风速",
        data: "19 km/h"
    }]
    return <div className="minor-container">
        {
            data.map((item, index) => {
                return <Item key={index} {...item} />
            })
        }
    </div>
}