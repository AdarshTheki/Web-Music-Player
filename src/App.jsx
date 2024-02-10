/* eslint-disable react-hooks/exhaustive-deps */
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import { useDataLayerValue } from './Context/DataLayer';
import { useEffect } from 'react';

const spotify = new SpotifyWebApi();

const App = () => {
    const [{ token, id }, dispatch] = useDataLayerValue();

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
                dispatch({ type: 'SET_PLAYLISTS', playLists: playlists });
            });

            // spotify.getNewReleases().then((albums) => {
            //     dispatch({ type: 'SET_ALBUMS', albums: albums });
            // });

            spotify.getMySavedTracks().then((likesTrack) => {
                dispatch({ type: 'SET_COLLECTION', collection: likesTrack });
            });

            spotify.getMyCurrentPlayingTrack().then((res) => {
                dispatch({ type: 'SET_PLAYING', playing: res });
            });
        }
    }, []);

    useEffect(() => {
        if (!token) {
            return;
        }
        spotify.getPlaylist(id || '5V8dA2hq3hFgNFR5SM7Enb').then((resp) => {
            dispatch({ type: 'SET_DISCOVER_WEEKLY', discover_weekly: resp });
        });
    }, [id, token]);

    return <div>{token ? <Player spotify={spotify} /> : <Login />}</div>;
};

export default App;