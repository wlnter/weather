export const getTime = () => {
    const now = new Date()
    const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    const day = week[now.getDay()]
    const hour = now.getHours();
    return `${day}, ${hour <= 12 ? hour : hour - 12 } ${hour <= 12 ? 'am' : 'pm'}`
}