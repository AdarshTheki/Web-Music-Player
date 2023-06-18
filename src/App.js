import React, { useEffect } from "react";
import Login from "./Login.js";
import { getTokenFromUrl } from "./spotify";
import Player from "./Player.js";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{user, token }, dispatch] = useDataLayerValue();
  // Run Code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      // get the initial token empty
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // get token Access
      spotify.setAccessToken(_token);
      
      // Get Me the the token Access  
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      
      // get user PlayList
      spotify.getUserPlaylists().then((playlists)=> {
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists,
        })
      })
      // console.log("I Have Toke 👉", token);
    }
  }, []);
  // console.log("Destructure 🦸‍♂️", playlists);
  // console.log("Destructure 👷‍♀️", token);

  return <div>{token ? <Player spotify={spotify} /> : <Login />}</div>;
}
export default App;
