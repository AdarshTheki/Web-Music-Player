import React from 'react'
import logo from "./assets/spotify_logo.svg";
import { loginUrl } from './spotify';

const Login = () => {
  return (
    <div className='login'>
      {/* Spotify Title */}
      <h1 className='login__title'>Please Login your Accounts</h1>
      {/* Spotify LOGO */}
      <img src={logo} alt='Spotify_logo' />
      {/* Login with Spotify button */}
      <a href={loginUrl}>Login with spotify</a>
    </div>
  );
}

export default Login
