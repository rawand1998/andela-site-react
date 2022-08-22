import React from 'react'
import './style.css'
function SubHeader({title,description}) {
  return (
    <div className="SubHeader-container">
     <h1>{title}</h1>
     <p>{description}</p>

    </div>
  )
}

export default SubHeader