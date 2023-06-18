import React from "react";
import "./Footer.css";
import {
  GridOff,
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
        <a href='#'>
          <Shuffle className='footer__icon' />
        </a>
        <a href='#'>
          <SkipPrevious className='footer__icon green' />
        </a>
        <a href='#'>
          <PlayCircleOutline className='footer__icon' />
        </a>
        <a href='#'>
          <SkipNext className='footer__icon green' />
        </a>
        <a href='#'>
          <Repeat className='footer__icon' />
        </a>
      </div>

      <Grid className='footer__right' container spacing={1}>
        <Grid item>
          <a href='#'>
            <PlaylistPlay className='footer__icon' />
          </a>
        </Grid>
        <Grid item>
          <a href='#'>
            <VolumeDown className='footer__icon' />
          </a>
        </Grid>
        <Grid item>
          <a href='#'>
            <Box sx={{ width: 100 }} >
              <Slider
                className="footer__icon"
                aria-label='slider'
                defaultValue={30}
                getAriaValueText={valueText}
                color='secondary'
              />
            </Box>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
