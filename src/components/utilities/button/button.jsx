import React from 'react'

const button = ({type, form, value, id, color, title}) => {

    let c = 'btn '

    switch(color) {
        case "black":
            c += 'btn-b'
        break
        case "white":
            c += 'btn-w'
        break
        case "color":
            c += 'btn-c'
        break
        default:
            c += 'btn-bg'
        break
    }
    
    return (
        <button type={type} form={form} value={value} id={id} className={c}>{title}</button>
    )
}

export default button