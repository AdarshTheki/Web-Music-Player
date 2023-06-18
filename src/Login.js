import React from "react";
import "./Login.css";
import logo from "./assets/Spotify-symbol.jpg";
import { loginUrl } from "./spotify";

export default function Login() {
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
