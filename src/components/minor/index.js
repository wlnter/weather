import styles from './index.module.css'
import humidityIcon from '../../assets/humidity.svg'
import precipIcon from '../../assets/precip.svg'
import speedIcon from '../../assets/windSpeed.svg'
import Item from './item'
export default (props) => {
    const { weather } = props
    const { windSpeed = "--", humidity = "--", precip = "--" } = weather || {}
    const data = [{
        icon: precipIcon,
        name: "降水量",
        data: `${precip}%`
    },{
        icon: humidityIcon,
        name: "湿度",
        data: `${humidity}%`
    },{
        icon: speedIcon,
        name: "风速",
        data: `${windSpeed} km/h`
    }]
    return <div className={styles["minor-container"]}>
        {
            data.map((item, index) => {
                return <Item key={index} {...item} />
            })
        }
    </div>
}