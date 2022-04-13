import Temperature from "../temperature";
import style from './index.module.css'
export default (props) => {
  const { data } = props;
  return (
      <div className={style.container}>
        {data.map((item, index) => {
          const { num, hour } = item;
          return (
            <div key={index} className={style.wrapper}>
              <Temperature size="small" num={num} />
              <div className={style.hour}>{hour}</div>
            </div>
          );
        })}
      </div>
  );
  
}