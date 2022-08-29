import React from 'react'
import './style.css'
function Contected({content}) {
  return (
   
    <div className="block-container-connected block2-connnected">
    <div className="overlay"></div>
    <div className="content-column-connected">
      <div className="inner-content">
        <div className="block-covered-content">
          {content}
        </div>
      </div>
    </div>
  
  </div>
  )
}

export default Contected