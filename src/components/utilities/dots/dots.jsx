import React, { useEffect } from 'react'

const dots = ({ nDots = null }) => {
    
    const items = Array.from({ length: nDots }, (_, index) => (
        <div key={index} className="dot"></div>
    ));

  return (
    <div className="dots d-flex justify-content-center">
      {items}
    </div>
  )

}

export default dots

{/* <div className="dot active"></div>
                    <div className="dot"></div> */}