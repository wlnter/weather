import styles from './index.module.css'
export default (props) => {
    const { icon, name, data } = props
    return (
      <div className={styles["minor-item"]}>
        <span
          className={`iconfont icon-${icon} ${styles["minor-item-icon"]}`}
        ></span>
        <div className={styles["minor-item-text"]}>{name}</div>
        <div className={styles["minor-item-data"]}>{`${data}`}</div>
      </div>
    );
}