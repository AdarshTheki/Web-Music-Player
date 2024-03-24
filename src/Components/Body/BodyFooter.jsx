/* eslint-disable no-empty-pattern */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { convertDate, convertTime } from '../../utils';
import LazyImage from '../Common/LazyImage';
import { useDataLayerValue } from '../../Context/DataLayer';

export default function Data({ data = [] }) {
    const [{}, dispatch] = useDataLayerValue();

    useEffect(() => {
        dispatch({ type: 'SET_RECENT_TRACKS', payload: data });
    }, [dispatch, data]);

    return (
        <>
            <div className='bodyFooter-header'>
                <div style={{ flex: 2 }}>#&nbsp;&nbsp;&nbsp;Title</div>
                <div style={{ flex: 1 }}>Album</div>
                <div style={{ flex: 0.8 }}>Added Date</div>
                <div style={{ flex: 0.5 }}>Duration</div>
            </div>
            {data?.map((item, index) => (
                <BodyFooter
                    key={index}
                    track={item?.track}
                    added_at={item?.added_at || item?.played_at}
                    index={index + 1}
                />
            ))}
        </>
    );
}

function BodyFooter({
    track = {
        album: {
            album_type: 'album',
            id: '#',
            images: [
                {
                    url: 'https://i.scdn.co/image/ab67616d0000485177eb7a5b9367de79c3b92a49',
                },
            ],
            name: 'album none',
            release_date: '2000-01-01',
            type: 'album',
        },
        artists: [
            {
                id: '#',
                name: 'artists none',
                type: 'artist',
            },
        ],
        duration_ms: 12345,
        id: '#',
        name: 'none',
        popularity: 54,
        preview_url: null,
        track_number: null,
        type: 'track',
    },
    added_at = '02-14-2023',
    index,
}) {
    const [{}, dispatch] = useDataLayerValue();

    const handleSongs = () => {
        dispatch({ type: 'SET_SONGS', payload: track });
    };

    return (
        <div className='bodyFooter' onClick={handleSongs}>
            <div className='col1' style={{ flex: 2 }}>
                {index && <p>{index}</p>}
                <LazyImage src={track?.album?.images[0]?.url} alt={track.name} />
                <div>
                    <NavLink
                        title={track.type}
                        className='bodyFooter__name'
                        to={`/track/${track.id}`}>
                        {track.name}
                    </NavLink>
                    <p className='bodyFooter__artist'>
                        {track.artists.slice(0, 3).map((artist) => (
                            <NavLink
                                to={`/artists/${artist.id}`}
                                key={artist.id}
                                title={artist.type}>
                                {artist.name}
                            </NavLink>
                        ))}
                    </p>
                </div>
            </div>
            {track.album && (
                <NavLink
                    to={`/album/${track?.album?.id}`}
                    style={{ flex: 1 }}
                    className='col2'
                    title={track?.album?.type}>
                    {track?.album?.name}
                </NavLink>
            )}
            <p className='col3' style={{ flex: 0.8 }}>
                {convertDate(added_at)}
            </p>
            <p className='col4' style={{ flex: 0.5 }}>
                {convertTime(track?.duration_ms)}
            </p>
        </div>
    );
}
