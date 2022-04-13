export const getDay = (now) => {
    now = now || new Date();
    const week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    const day = week[now.getDay()];
    return day
}
export const getTime = () => {
    const now = new Date()
    const day = getDay(now);
    const hour = now.getHours();
    return `${day}, ${hour <= 12 ? hour : hour - 12 } ${hour <= 12 ? 'am' : 'pm'}`
}

const weatherArr = ["晴", "云", "风", "雨", "雪", "雷"];
const dayIcon = [
  "https://gw.alicdn.com/imgextra/i3/O1CN01Q3U5Lc1lSgzcaSchm_!!6000000004818-2-tps-400-400.png",
  "https://gw.alicdn.com/imgextra/i3/O1CN01GYC5ZP1kzNeD1zfJR_!!6000000004754-2-tps-400-400.png",
  "https://gw.alicdn.com/imgextra/i4/O1CN01gIuHIN247bSMOeyL4_!!6000000007344-2-tps-400-400.png",
  "https://gw.alicdn.com/imgextra/i1/O1CN01tFfA8y1pEjNxyJXRb_!!6000000005329-2-tps-400-400.png",
  "https://gw.alicdn.com/imgextra/i3/O1CN01oNWqCk1MsSszdbydE_!!6000000001490-2-tps-400-400.png",
  "https://gw.alicdn.com/imgextra/i4/O1CN015CKZ3G1g0EIgCDKlS_!!6000000004079-2-tps-400-400.png",
];
const nightIcon = [
  "https://gw.alicdn.com/imgextra/i2/O1CN01oWsYFH1a1FUTeAbpJ_!!6000000003269-2-tps-400-400.png",
  "https://gw.alicdn.com/imgextra/i3/O1CN01YBZ93l1JKANYTxwtg_!!6000000001009-2-tps-400-400.png",
  "https://gw.alicdn.com/imgextra/i1/O1CN01GukE5r1lSgzXhQjQN_!!6000000004818-2-tps-400-400.png",
  "https://gw.alicdn.com/imgextra/i3/O1CN01jzMiPo21xrnw4drRQ_!!6000000007052-2-tps-400-400.png",
  "https://gw.alicdn.com/imgextra/i2/O1CN01DKuYS222gkcUu9TBS_!!6000000007150-2-tps-400-400.png",
  "https://gw.alicdn.com/imgextra/i1/O1CN017kz74y24HDm65KiL1_!!6000000007365-2-tps-400-400.png",
];

export const getIcon = (text) => {
    if(!text){
        return ""
    }
  let index = -1;
  let iconArr = new Date().getHours() >= 18 ? nightIcon : dayIcon;
  weatherArr.forEach((item, i) => {
    if (text.indexOf(item) > -1) {
      index = i;
    }
  });

  return index > -1 ? iconArr[index] : iconArr[0];
};