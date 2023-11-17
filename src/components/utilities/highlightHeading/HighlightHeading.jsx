import React from 'react'

const HighlightHeading = ({_highlight, _title, _display = 3}) => {
    return (
        <>
            <p className="highlight">{_highlight}</p>
            <h2 className={`display-${_display}`}>{_title}</h2>
        </>
  )
}

export default HighlightHeading