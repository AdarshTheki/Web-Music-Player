import SpotifyWebApi from "spotify-web-api-js";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import { useDataLayerValue } from "./Context/DataLayer";
import { useEffect } from "react";

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ token, id }, dispatch] = useDataLayerValue();

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
      spotify.setAccessToken(_token);

      // Get Me the the token Access
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      // get the User Playlists
      spotify
        .getUserPlaylists()
        .then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playLists: playlists,
          });
        })
        .catch((err) => console.log("playlist err", err));

      // get album_type single
      spotify
        .getNewReleases()
        .then((albums) => {
          dispatch({
            type: "SET_ALBUMS",
            albums: albums,
          });
        })
        .catch((err) => console.log("album err", err));
    }
  }, []);

  useEffect(() => {
    if (!token) {
      return;
    }
    // get the User Playlists with id default
    // spotify.getPlaylist("5V8dA2hq3hFgNFR5SM7Enb").then((resp) => {
    spotify.getPlaylist(id || "5V8dA2hq3hFgNFR5SM7Enb").then((resp) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: resp,
      });
    });
  }, [id, token]);

  return <div>{token ? <Player spotify={spotify} /> : <Login />}</div>;
};

export default App;
