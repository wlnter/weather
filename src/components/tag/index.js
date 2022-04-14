import './index.css'
import Tag from './tag'

export default (props) => {
  const { temp, text, windDir, windSpeed, humidity, precip } = props.weather
  const data = [
    {
      icon: "precip",
      text: `${precip || "--"}mm`,
      color: "#658ED9",
      backgroundColor: "rgba(101, 142, 217, 0.1)",
    },
    {
      icon: "humidity",
      text: `${humidity || "--"}%`,
      color: "#D86191",
      backgroundColor: "rgba(216, 97, 145, 0.1)",
    },
    {
      icon: "windSpeed",
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