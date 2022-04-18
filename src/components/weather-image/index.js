import { isNight } from "../../util";

const weatherArr = ["晴", "云", "风", "雨", "雪", "雷"];
const pathName = ["sun", "cloud", "wind", "rain", "snow", "thunder"]

const getPath = (text) => {
  let index = -1;
  weatherArr.forEach((item, i) => {
    if (text.indexOf(item) > -1) {
      index = i;
    }
  });
  return pathName[index] || pathName[0]
};

export default (props) => {
  const { text } = props
  if(!text){
    return null;
  }
  return (
    <img
      src={require(`../../assets/weatherImage/${
        isNight() ? "night" : "day"
      }-${getPath(text)}.png`)}
      style={{ width: "100%", height: "100%" }}
    />
  );
}