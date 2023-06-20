import React from "react";
import "./Footer.css";
import {
  PlayCircleOutline,
  PlaylistPlay,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@mui/material";
import albumLogo from "../assets/Spotify-symbol.jpg";
import { useDataLayerValue } from "../Context/DataLayer";

export default function Footer() {
  const [{discover_weekly}] = useDataLayerValue();
  function valueText(value) {
    return value;
  }
  return (
    <div className='footer'>
      <div className='footer__left'>
        <img src={discover_weekly?.images[0].url} alt='albumLogo' width='50' />
        <div className='footer__detail'>
          <h4>{discover_weekly?.name}</h4>
          <p>{discover_weekly?.tracks?.items[0].track.name}</p>
        </div>
      </div>
      <div className='footer__center'>
        <Shuffle className='footer__icon'/>
        <SkipPrevious className='footer__icon' color='secondary' />
        <PlayCircleOutline className='footer__icon' color='primary' />
        <SkipNext className='footer__icon' color='secondary' />
        <Repeat className='footer__icon' />
      </div>

      <Grid className='footer__right' container spacing={1}>
        <Grid item>
          <PlaylistPlay className='footer__icon' />
        </Grid>
        <Grid item>
          <VolumeDown className='footer__icon' />
        </Grid>
        <Grid item sx={{ width: 50 }} color='primary'>
          <Slider
            className='footer__icon'
            defaultValue={30}
            getAriaValueText={valueText}
          />
        </Grid>
      </Grid>
    </div>
  );
}
