import React, { useEffect } from "react";
import Login from "./Login.js";
import { getTokenFromUrl } from "./spotify";
import Player from "./Player.js";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./Context/DataLayer.js";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();
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

      spotify
        .getUserPlaylists()
        .then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        })
        .catch((err) => console.log("playlist err", err));

      spotify.getPlaylist("37i9dQZF1DWZNJXX2UeBij").then((resp) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: resp,
        });
      });
    }
  }); // I will remove to []

  return <div>{token ? <Player spotify={spotify} /> : <Login />}</div>;
}
export default App;
