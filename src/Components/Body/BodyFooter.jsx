/* eslint-disable no-empty-pattern */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { convertDate, convertTime } from '../../utils';
import LazyImage from '../Common/LazyImage';
import { useDataLayerValue } from '../../Context/DataLayer';
import './BodyFooter.css';

export default function BodyFooter({ track, added_at, index }) {
    const [{}, dispatch] = useDataLayerValue();

    function songsHandler() {
        dispatch({ type: 'SET_SONGS', songs: track });
    }

    return (
        <div className='bodyFooter' onClick={songsHandler}>
            <div className='col1'>
                {index && <p>{index}</p>}
                <LazyImage
                    src={track?.album?.images[2].url || track?.album?.images[0].url}
                    alt={track?.name}
                />
                <div>
                    <NavLink
                        title={track?.type}
                        className='bodyFooter__name'
                        to={`/track/${track?.id}`}>
                        {track?.name}
                    </NavLink>
                    <p className='bodyFooter__artist'>
                        {track?.artists?.map((artist) => (
                            <NavLink
                                to={`/artists/${artist?.id}`}
                                key={artist?.id}
                                title={artist?.type}>
                                {artist?.name}
                            </NavLink>
                        ))}
                    </p>
                </div>
            </div>
            <NavLink to={`/album/${track?.album?.id}`} className='col2' title={track?.album?.type}>
                {track?.album?.name}
            </NavLink>
            <p className='col3'>{(added_at && convertDate(added_at)) || '02-14-2023'}</p>
            <p className='col4'>{convertTime(track?.duration_ms) || 12345}</p>
        </div>
    );
}
