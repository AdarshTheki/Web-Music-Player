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
import { Box, Grid, Slider } from "@mui/material";
import albumLogo from "./assets/Spotify-symbol.jpg";

export default function Footer() {
  function valueText(value) {
    return value;
  }
  return (
    <div className='footer'>
      <div className='footer__left'>
        <img src={albumLogo} alt='albumLogo' width='100' />
        <div className='footer__detail'>
          <h4>Yeah !</h4>
          <p>Uber music</p>
        </div>
      </div>
      <div className='footer__center'>
        <Shuffle className='footer__icon' color="success"/>
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
