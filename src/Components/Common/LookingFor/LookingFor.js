import React from 'react'
import './style.css'
function LookingFor() {
  return (
    <div className="column-container">
        <h2><em>Find</em>  what you’re looking for and more</h2>
        <div style={{height:'12px'}}></div>
        <div className="block-column1">
            <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/shutterstock_1660490494-1024x683.jpg"/>
            </figure>
            <div class="wp-block-columns" style={{flexBasis:"100px",width:"200px"}}></div>
            <div class="wp-block-column">
                <h3>Grow your career with us</h3>
                <ul>
                    <li>Find meaningful, long-term work with interesting organizations</li>
                    <li>Work with an internationally distributed team and company</li>
                    <li>Gain additional skills through exclusive learning opportunities</li>
                    <li>Network with other technologists to develop your expertise</li>
                </ul>
            </div>
        </div>


<div class="spacer"></div>
        <div className="block-column1 block2">
            
            <div class="wp-block-columns" style={{flexBasis:"100px",width:"200px"}}></div>
            <div class="wp-block-column">
                <h3>Grow your career with us</h3>
                <ul>
                    <li>Only work with companies we trust</li>
                    <li>Receive payments on time in your local currency, USD, or in Crypto</li>
                    <li>Discover salaries that match your skills and experience</li>
                   
                </ul>
            </div>
            <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/shutterstock_1696088776-768x512.jpg"/>
            </figure>
        </div>

        <div class="spacer"></div>
        <div className="block-column1 block3">
            <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/shutterstock_1653288229-1024x683.jpg"/>
            </figure>
            <div class="wp-block-columns" style={{flexBasis:"100px",width:"200px"}}></div>
            <div class="wp-block-column">
                <h3>Grow your career with us</h3>
                <ul>
                    <li>Ditch the commute and work from anywhere</li>
                    <li>With roles across different time zones, you choose when you work</li>
                    <li>Gain additional skills through exclusive learning opportunities</li>
                   
                </ul>
            </div>
        </div>


    </div>
  )
}

export default LookingFor