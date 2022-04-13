import Forecast from './forecast'

export default (props) => {
  const { data } = props
  return data.map((item,index) => {
    
    return <Forecast key={index} {...item} />
  })
}