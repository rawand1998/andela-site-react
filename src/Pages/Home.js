import React from 'react'
import Header from '../Components/Common/Header/Header'
import Navbar from '../Components/Common/NavBar/Navbar'

import SubHeader from '../Components//Common/SubHeader/SubHeader'
import './style.css'

function Home() {
  return (
    <div>
        <Header className="home" id="header-conatiner">
            <Navbar />
            <SubHeader title="We’re here to help you build a world class team today"  description="Trusted by enterprise teams and growing startups alike, Enterprise - Andela.htmlindustry average."/>
        </Header>
    </div>
  )
}

export default Home