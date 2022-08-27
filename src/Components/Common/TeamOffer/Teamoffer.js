import React from 'react'
import './style.css'
function Teamoffer({title,paragraph,header1,header2,header3,header4,paragraph1,paragraph2,paragraph3,paragraph4}) {
  return (
    <div>
          <div className="offer-conatiner">
        <div className="offer-block">
          <div className="spacer"></div>
          <h2>
            {title}
            
          </h2>
          <p className="offer-paragraph">
            {paragraph}
          
          </p>
          <div className="offer-blocks">
            <div className="offer-block-1">
              <h4>{header1}</h4>
              <p>
                {paragraph1}
            
              </p>
            </div>
            <div className="offer-block-1">
              <h4>{header2}</h4>
              <p>
                {paragraph2}
            
              </p>
            </div>
            <div className="offer-block-1">
              <h4>{header3}</h4>
              <p>
                {paragraph3}
              
              </p>
            </div>
            <div className="offer-block-1">
              <h4>{header4}</h4>
              <p>
                {paragraph4}
              
              </p>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </div>
  )
}

export default Teamoffer