import React, { useEffect } from "react";
import "./SongRow.css";

const SongRow = ({ track }) => {
  return (
    <div className='songRow'>
      <div className='songRow__img'>
        <img src={track?.album?.images[0]?.url} alt='image_album' />
      </div>
      <div className='songRow__info'>
        <h1>{track?.name}</h1>
        <p>
          {track?.artists?.map((artists) => artists.name).join(", ")}
          {track?.album?.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
