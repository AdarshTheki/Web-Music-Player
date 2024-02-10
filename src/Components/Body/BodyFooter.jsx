/* eslint-disable react/prop-types */
import React from 'react';
import './BodyFooter.css';
import { convertDate, convertTime } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { useDataLayerValue } from '../../Context/DataLayer';

export default function BodyFooter({ track, added_at }) {
    const Navigate = useNavigate();
    const [{ trackId }, dispatch] = useDataLayerValue();

    const setTrackId = (item) => {
        dispatch({ type: 'SET_TRACKS', tracks: track });
        Navigate(`/track/${item}`);
    };

    return (
        <div className='bodyFooter'>
            <div className='bodyFooter__rowOne'>
                <img
                    src={track?.album?.images[2].url || track?.album?.images[0].url}
                    alt={track.name}
                    width={20}
                />
                <div>
                    <p
                        className='bodyFooter__name line-clamp'
                        title={track.type}
                        onClick={() => setTrackId(track.id)}>
                        {track.name}
                    </p>
                    <p className='bodyFooter__artist line-clamp'>
                        {track.artists.map((artist) => (
                            <span key={artist.id} title={artist.type} className='span hover'>
                                {artist.name}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
            <div className='span hover line-clamp'>{track.album.name}</div>
            <div>{convertDate(added_at)}</div>
            <div>{convertTime(track.duration_ms)}</div>
        </div>
    );
}

const collection = {
    href: 'https://api.spotify.com/v1/users/rn94q8o7hdw670tjdlzc7bonv/playlists?offset=0&limit=20',
    items: [
        {
            collaborative: false,
            description: "Every track you're listening/should be listening to ;) Cover- Animal",
            external_urls: {
                spotify: 'https://open.spotify.com/playlist/37i9dQZF1DXbVhgADFy3im',
            },
            href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXbVhgADFy3im',
            id: '37i9dQZF1DXbVhgADFy3im',
            images: [
                {
                    height: null,
                    url: 'https://i.scdn.co/image/ab67706f000000039aca80c44272329aa82d6dff',
                    width: null,
                },
            ],
            name: 'Trending Now India',
            owner: {
                display_name: 'Spotify',
                external_urls: {
                    spotify: 'https://open.spotify.com/user/spotify',
                },
                href: 'https://api.spotify.com/v1/users/spotify',
                id: 'spotify',
                type: 'user',
                uri: 'spotify:user:spotify',
            },
            primary_color: null,
            public: false,
            snapshot_id: 'MTcwNzM2OTIwMCwwMDAwMDAwMDc3ZjZkNDhiNzEzNDU2ZjliNTc4MjYzZDFiZjVjMDI3',
            tracks: {
                href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXbVhgADFy3im/tracks',
                total: 75,
            },
            type: 'playlist',
            uri: 'spotify:playlist:37i9dQZF1DXbVhgADFy3im',
        },
    ],
    limit: 20,
    next: null,
    offset: 0,
    previous: null,
    total: 9,
};
