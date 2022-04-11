import './index.css'
export default (props) => {
    const { icon, name, data } = props
    return <div className="minor-item">
        <img src={icon} className="minor-item-icon" />
        <div className="minor-item-text">{name}</div>
        <div className="minor-item-data">{`${data}`}</div>
    </div>
}