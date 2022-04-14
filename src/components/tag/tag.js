import './index.css'
export default (data) => {
  const { icon, text, color, backgroundColor } = data;
  return (
    <div className="forecast-tag" style={{ backgroundColor, color }}>
      <span className={`iconfont icon-${icon} forecast-tag-icon`}></span>
      <div className="forecast-tag-text">
        {text}
      </div>
    </div>
  );
}