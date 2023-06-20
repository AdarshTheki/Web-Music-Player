import React from "react";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import { useDataLayerValue } from "../Context/DataLayer";
import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";

function Body({ spotify }) {
  const [{ discover_weekly }] = useDataLayerValue();
  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body__info'>
        <div className='body__img'>
          <img src={discover_weekly?.images[0].url} alt='bgImageAny' />
        </div>
        <div className='body__infoText'>
          <strong>Playlists</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body__songs'>
        <div className='body__icon'>
          <PlayCircleFilled className='body__shuffle' />
          <Favorite fontSize='large' />
          <MoreHoriz fontSize='large' />
        </div>
        {/* List of songs */}
        <div className='body__col'>
          {discover_weekly?.tracks.items.map((item, index) => (
            <SongRow track={item.track} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Body;
