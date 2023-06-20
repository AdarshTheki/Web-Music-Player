import React from "react";
import Sidebar from "./Sidebar.js";
import Body from "./Body.js";
import Footer from "./Footer.js";
// import from "./Player.css";

function Player({ spotify }) {
  return (
    <div className='player'>
      <div className='player__body' style={{display:'flex',background:'#000'}}>
        <Sidebar/>
        <Body spotify={spotify}/>
      </div>
      <Footer/>
    </div>
  );
}
export default Player;
