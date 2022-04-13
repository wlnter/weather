import styles from './forecast.module.css'
import Temperature from '../temperature'

export default (props) => {
  const { date, icon, range } = props
  return (
    <div className={styles.container}>
      <div className={styles.date}>{date}</div>
      <img className={styles.icon} src={icon} />
      <div className={styles.range}>
        <Temperature size="mini" num={range[0]} />
        <Temperature
          size="mini"
          num={range[1]}
          styles={{ color: "rgba(51, 40, 33, 0.5)" }}
        />
      </div>
    </div>
  );
}