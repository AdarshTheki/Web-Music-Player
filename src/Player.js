import React from "react";
import Sidebar from "./Components/Sidebar.js";
import Body from "./Components/Body.js";
import Footer from "./Components/Footer.js";

function Player({ spotify }) {
  const Styles = {
    display: "flex",
    background: "#000",
  };
  return (
    <div className='player'>
      <div className='player__body' style={Styles}>
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}
export default Player;
