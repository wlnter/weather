import { WEB_API_KEY, AMAP_API_KEY } from "../const";
import { getDay, getIcon } from '../util'

export const getLocation = async () => {
    try{
        let amapResponse = await fetch(`https://restapi.amap.com/v3/ip?output=json&key=${AMAP_API_KEY}`)
        let amapRes = await amapResponse.json()
        const { city, info } = amapRes;
        if(info === "OK"){
            let cityResponse = await fetch(`https://geoapi.qweather.com/v2/city/lookup?location=${city}&number=1&key=${WEB_API_KEY}`)
            let cityRes = await cityResponse.json()
            const { location, code } = cityRes
            if(code === "200" && location[0]){
                const {id, adm1, adm2} = location[0]
                return [id, adm2, adm1];
            }else{
                throw new Error('qweather api error')
            }
        }else{
            throw new Error('amap api error')
        }
    }catch(e){
        console.log(e)
    }
}

export const getWeatherNow = async (location) => {
    try{
        const response = await fetch(
          `https://api.qweather.com/v7/weather/now?location=${location}&key=${WEB_API_KEY}`
        );
        const res = await response.json()
        const { code, now } = res
        const { temp, text, windDir, windSpeed, humidity, precip } = now
        if(code === '200'){
            return { temp, text, windDir, windSpeed, humidity, precip }
        }else{
            throw new Error('qweather api error')
        }
    }catch(e){
        console.log(e)
    }
}

export const getForecast24h = async () => {

}

export const getForecast7d = async (location) => {
  try {
    const response = await fetch(
      `https://api.qweather.com/v7/weather/7d?location=${location}&key=${WEB_API_KEY}`
    );
    const res = await response.json();
    if (res.code === "200") {
      const data = res.daily;
      const ret = data.map((item, index) => {
        const { fxDate, tempMin, tempMax, iconDay, iconNight, textDay } = item;
        return {
          date: getDay(new Date(fxDate)),
          range: [tempMax, tempMin],
          icon: getIcon(textDay),
        };
      });
      return ret;
    } else {
      throw new Error("qweather api error");
    }
  } catch (e) {}
};