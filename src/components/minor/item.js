import styles from './index.module.css'
export default (props) => {
    const { icon, name, data } = props
    return (
      <div className={styles["minor-item"]}>
        <img src={icon} className={styles["minor-item-icon"]} />
        <div className={styles["minor-item-text"]}>{name}</div>
        <div className={styles["minor-item-data"]}>{`${data}`}</div>
      </div>
    );
}