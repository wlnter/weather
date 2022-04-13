import style from "./small.module.css";
export default (props) => {
  const { num, styles } = props;
  if (isNaN(num)) {
    return (
      <div className={style.container} style={styles}>
        <div className={style.num}>{" ".replace(/ /g, "\u00a0")}</div>
        <div className={style.unit}>{" ".replace(/ /g, "\u00a0")}</div>
      </div>
    );
  }
  return (
    <div className={style.container} style={styles}>
      <div className={style.num}>{num}</div>
      <div className={style.unit}>°C</div>
    </div>
  );
};
