export default (props) => {
  const { icon } = props
  let src = null
  try{
    src = require(`../../assets/icon/128/${icon}.webp`)
  }catch(e){
  }

  return src ? (
    <img
      src={src}
      style={{ width: "100%", height: "100%" }}
    />
  ) : null
}