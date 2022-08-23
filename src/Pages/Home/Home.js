import React from "react";
import Header from "../../Components/Common/Header/Header";
import Navbar from "../../Components/Common/NavBar/Navbar";
import Slider from "../../Components/Common/Slider/Slider";

import SubHeader from "../../Components/Common/SubHeader/SubHeader";
import "./style.css";

function Home() {
  return (
    <div>
      <Header className="home" id="header-conatiner">
        <Navbar />
        <SubHeader
          title="Find work that you love with companies you can trust"
          description="Join Andela to experience the joy of long-term work,
                        with vetted companies and competitive compensation."
        />
      </Header>
      <a className="btn">Find Work</a>
      <div className="spacer"></div>
      <Slider />
    </div>
  );
}

export default Home;
