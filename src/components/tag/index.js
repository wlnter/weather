import './index.css'
import Tag from './tag'
import precipIcon  from '../../assets/forecast-humidity.svg'
import humidityIcon from '../../assets/forecast-precip.svg'
import speedIcon from '../../assets/forecast-windSpeed.svg'

export default (props) => {
  const { temp, text, windDir, windSpeed, humidity, precip } = props.weather
  const data = [
    {
      icon: precipIcon,
      text: `${precip || "--"}mm`,
      color: "#658ED9",
      backgroundColor: "rgba(101, 142, 217, 0.1)",
    },
    {
      icon: humidityIcon,
      text: `${humidity || "--"}%`,
      color: "#D86191",
      backgroundColor: "rgba(216, 97, 145, 0.1)",
    },
    {
      icon: speedIcon,
      text: `${windSpeed || "--"} km/h`,
      color: "#5E4FC1",
      backgroundColor: "rgba(94, 79, 193, 0.1)",
    },
  ];

  return <div className='tag-line'>
    {
      data.map((item, index) => {
        return <Tag key={index} {...item} />
      })
    }
  </div>
}