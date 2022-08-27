import React from 'react'
import './style.css'
function Contected({title,buttonTitle}) {
  return (
    <div className="block-container block2">
    <div className="overlay"></div>
    <div className="content-column">
      <div className="inner-content">
        <div className="block-covered-content">
          <h2>{title}
          </h2>
          <a className="btn">{buttonTitle}</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contected