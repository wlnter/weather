import './index.css'
export default () => {
    const tag = [{name: '强风', color: `rgba(212, 66, 111, 0.5)`, width: `72px`}, {name: '多云', color: `rgba(106, 117, 186, 0.5)`, width: `50px`}]
    return <div className="major-box">
        <img src={"https://s3.bmp.ovh/imgs/2022/04/11/28da5e75730d747f.png"} className="major-image" />
        <div className='major-location'>杭州市, 浙江省</div>
        <div className='major-content'>
            <div className='major-info'>
                <div className='major-temp'>
                    <div className='major-temp-num'>15</div>
                    <div className='major-temp-unit'>°C</div>
                </div>

                <div className='major-time'>周日, 11 am</div>
            </div>
            <div className='major-tag'>
                {
                    tag.map((item, index) => {
                        const { name, width ,color} = item;
                        return <div key={index} className="major-tag-item" style={{width, backgroundColor: color}}><div className="major-tag-text">{name}</div></div>
                    })
                }
            </div>
        </div>
        <div className="major-button"><div className="major-button-text">详情</div></div>
    </div>
}