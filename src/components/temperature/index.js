import style from './index.module.css'

export default (props) => {
  const { num, styles, size } = props;
  if (isNaN(Number(num))) {
    return (
      <div className={style[`${size}-container`]} style={styles}>
        <div className={style[`${size}-num`]}>{" ".replace(/ /g, "\u00a0")}</div>
        <div className={style[`${size}-unit`]}>{" ".replace(/ /g, "\u00a0")}</div>
      </div>
    );
  }
  return (
    <div className={style[`${size}-container`]} style={styles}>
      <div className={style[`${size}-num`]}>{num}</div>
      <div className={style[`${size}-unit`]}>°C</div>
    </div>
  );
};