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
                dispatch({ type: 'SET_PLAYLISTS', payload: playlists?.items });
            });

            spotify.getMySavedTracks().then((collection) => {
                dispatch({ type: 'SET_COLLECTION', payload: collection?.items });
            });

            spotify.getMyTopArtists().then((artist) => {
                dispatch({ type: 'SET_ARTISTS_LIST', payload: artist?.items });
            });

            spotify.getMyRecentlyPlayedTracks().then((playing) => {
                dispatch({ type: 'SET_RECENT_TRACKS', payload: playing?.items });
                dispatch({ type: 'SET_SONGS', payload: playing?.items[0].track });
            });
        } else {
            // Handle case where access token is missing
            console.error('Access token not found in URL hash');
        }
    }, []);

    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            {token ? <Player spotify={spotify} /> : <Login />}
        </div>
    );
};

export default App;
