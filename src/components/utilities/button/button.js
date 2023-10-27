import React from 'react'
import './button.css'

const button = ({btn, type, form, value, id, color, title, url}) => {
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

    if (btn === 'true') {
        return (
            <button type={type} form={form} value={value} id={id} class={c}>{title}</button>
        )
    }
    else {
        return (
            <a href={url} id={id} class={c}>{title}</a>
        )
    }
 
}

export default button