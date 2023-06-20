import React from "react";
import "./Sidebar.css";
import logo from "../assets/Spotify-symbol.jpg";
import SideBarOption from "./SideBarOption";
import { Home } from "@material-ui/icons";
import { Search } from "@material-ui/icons";
import { LibraryMusic } from "@material-ui/icons";
import { useDataLayerValue } from "../Context/DataLayer";

function Sidebar() {
  // Pull the playList with the help of DataLayer
  const [{ playlists }] = useDataLayerValue();
  return (
    <div className='sidebar'>
      <img src={logo} alt='image_logo' className='sidebar__logo' />
      <SideBarOption Icon={Home} title='Home' />
      <SideBarOption Icon={Search} title='Search' />
      <SideBarOption Icon={LibraryMusic} title='Your Library' />

      <br />
      <strong className='sidebar__title'>playlist</strong>
      <hr />
      {playlists?.items?.map((e, index) => {
        // console.log("✅",e,index)
        return <SideBarOption key={index} title={e.name} />;
      })}
    </div>
  );
}
export default Sidebar;
