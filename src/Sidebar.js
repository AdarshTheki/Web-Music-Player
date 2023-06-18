import React from "react";
import "./Sidebar.css";
import logo from "./assets/Spotify-symbol.jpg";
import SideBarOption from "./SideBarOption";
import { Home } from "@material-ui/icons";
import { Search } from "@material-ui/icons";
import { LibraryMusic } from "@material-ui/icons";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  // Pull the playList with the help of DataLayer
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className='sidebar'>
      <img src={logo} alt='image_logo' className='sidebar__logo' />
      <SideBarOption Icon={Home} title='Home' />
      <SideBarOption Icon={Search} title='Search' />
      <SideBarOption Icon={LibraryMusic} title='Your Library' />

      <br />
      <strong className='sidebar__title'>playlist</strong>
      <hr />
      {/* Error Problem form the playList */}
      {playlists?.items?.map((e) => {
        return <SideBarOption title={e.name} />
      })}
      <br /><br /><br />
      <h4>comming soon...</h4>
      <h4>error...</h4>
    </div>
  );
}
export default Sidebar;
