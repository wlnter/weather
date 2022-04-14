import styles from './index.module.css'
import Item from './item'
export default (props) => {
    const { weather } = props
    const { windSpeed = "--", humidity = "--", precip = "--" } = weather || {}
    const data = [
      {
        icon: "precip",
        name: "降水量",
        data: `${precip}mm`,
      },
      {
        icon: "humidity",
        name: "湿度",
        data: `${humidity}%`,
      },
      {
        icon: "windSpeed",
        name: "风速",
        data: `${windSpeed} km/h`,
      },
    ];
    return <div className={styles["minor-container"]}>
        {
            data.map((item, index) => {
                return <Item key={index} {...item} />
            })
        }
    </div>
}