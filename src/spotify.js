export const authEndPoint = 'https://accounts.spotify.com/authorize?';

// DEV OPTIONS
// const redirectUri = 'http://localhost:3000';  

// HOSTED OPTIONS
// const redirectUri = 'https://spotify-997e3.web.app'; 

// HOSTED OPTIONS
const redirectUri = 'https://spotify-music-player-react.netlify.app'; 

// const clientId = '7a89545e159d4824b2787cf8ae5aa200'; // Adarsh Account
const clientId = '0932d71c3f1741b7b0812b953904be50'; // In Adarsh549 Account

const scopes = [
    // "user-read-currently-playing",
    // "user-read-recently-played",
    // "user-read-playback-state",
    // "user-top-read",
    // "user-modify-playback-state",
    'user-read-playback-position',
    'user-read-email',
    'user-library-modify',
    'playlist-modify-public',
    'ugc-image-upload',
    'user-follow-modify',
    'user-modify-playback-state',
    'user-read-recently-played',
    'user-read-private',
    'user-library-read',
    'user-top-read',
    'playlist-modify-private',
    'user-follow-read',
    'user-read-playback-state',
    'user-read-currently-playing',
    'playlist-read-private',
    'playlist-read-collaborative',
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};

export const loginUrl = `${authEndPoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`;
