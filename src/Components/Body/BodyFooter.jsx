/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { convertDate, convertTime } from '../../utils';
import './BodyFooter.css';
import LazyImage from '../Common/LazyImage';
import { useDataLayerValue } from '../../Context/DataLayer';

export default function BodyFooter({ track, added_at, index }) {
    const [{ songs }, dispatch] = useDataLayerValue();

    function songsHandler() {
        dispatch({ type: 'SET_SONGS', songs: track });
    }

    return (
        <div className='bodyFooter' onClick={songsHandler}>
            <div className='bodyFooter__rowOne col1'>
                {index && <p>{index}</p>}
                <LazyImage
                    src={track?.album?.images[2].url || track?.album?.images[0].url}
                    alt={track?.name}
                />
                <div>
                    <NavLink
                        title={track?.type}
                        className='bodyFooter__name line-clamp'
                        to={`/track/${track?.id}`}>
                        {track?.name}
                    </NavLink>
                    <p className='bodyFooter__artist line-clamp'>
                        {track?.artists?.map((artist) => (
                            <span key={artist?.id} title={artist?.type} className='span hover'>
                                {artist?.name}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
            <p className='span hover line-clamp col2' title={track?.album?.type}>
                {track?.album?.name}
            </p>
            <p className='col3'>{(added_at && convertDate(added_at)) || '02-14-2023'}</p>
            <p className='col4'>{convertTime(track?.duration_ms) || 12345}</p>
        </div>
    );
}
