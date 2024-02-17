/* eslint-disable react-hooks/exhaustive-deps */
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import { useDataLayerValue } from './Context/DataLayer';
import { useEffect } from 'react';

const spotify = new SpotifyWebApi();

const App = () => {
    const [{ token }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = '';
        const _token = hash.access_token;

        if (_token) {
            dispatch({ type: 'SET_TOKEN', token: _token });
            spotify.setAccessToken(_token);

            spotify.getMe().then((user) => {
                dispatch({ type: 'SET_USER', user: user });
            });

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({ type: 'SET_PLAYLISTS', playLists: playlists?.items });
            });

            spotify.getMyTopArtists().then((artist) => {
                dispatch({ type: 'SET_ARTISTS_LIST', artistsList: artist?.items });
            });

            spotify.getMyRecentlyPlayedTracks().then((res) => {
                dispatch({ type: 'SET_PLAYING', playing: res?.items });
                dispatch({ type: 'SET_SONGS', songs: res?.items[0]?.track });
            });
        } else {
            // Handle case where access token is missing
            console.error('Access token not found in URL hash');
        }
    }, []);

    return <div>{token ? <Player spotify={spotify} /> : <Login />}</div>;
};

export default App;
