import './index.css'
export default (data) => {
  const { icon, text, color, backgroundColor } = data;
  return (
    <div className="forecast-tag" style={{ backgroundColor }}>
      <img className="forecast-tag-icon" src={icon} />
      <div className="forecast-tag-text" style={{ color }}>
        {text}
      </div>
    </div>
  );
}