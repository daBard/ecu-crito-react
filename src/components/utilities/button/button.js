import React from 'react'
// import './button.css'

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
        <button type={type} form={form} value={value} id={id} class={c}>{title}</button>
    )
}

export default button