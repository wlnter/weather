import React from 'react'

export default (props) => {
    const { top, left, width, right, bottom } = props.style || {}
    const style = {
        width: `${width}px`,
        height: `${width}px`,
        borderRadius: `${width/2}px`,
        backgroundColor: 'white',
        position: 'absolute',
        left: `${left}px`,
        top: `${top}px`,
        right: `${right}px`,
        bottom: `${bottom}px`
    }
    return <div style={style} />
}