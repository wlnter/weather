export const getDay = (now) => {
    now = now || new Date();
    const week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    const day = week[now.getDay()];
    return day
}
export const getHour = (now) => {
    now = now || new Date();
    let hour = now.getHours();


    let ampm = (hour <= 12 && hour >= 1) ? "am" : "pm";
    hour = hour % 12;
    hour = hour ? hour : 12;

    return `${hour} ${ampm}`;
}
export const isNight = (now) => {
  now = now || new Date();
  const hours = now.getHours();
  return hours >= 18 || hours <= 6 ? true : false
}