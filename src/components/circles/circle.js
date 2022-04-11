import React from 'react'

export default (props) => {
    const { top, left, width } = props.style || {}
    const style = {
        width: `${width}px`,
        height: `${width}px`,
        borderRadius: `${width/2}px`,
        backgroundColor: 'white',
        position: 'absolute',
        left: `${left}px`,
        top: `${top}px`
    }
    return <div style={style} />
}