/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { convertDate, convertTime } from '../../utils';
import './BodyFooter.css';

export default function BodyFooter({ track, added_at }) {
    return (
        <div className='bodyFooter'>
            <div className='bodyFooter__rowOne'>
                <img
                    src={track?.album?.images[2].url || track?.album?.images[0].url}
                    alt={track.name}
                    width={20}
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
            <div className='span hover line-clamp' title={track?.album?.type}>
                {track?.album?.name}
            </div>
            <div>{convertDate(added_at)}</div>
            <div>{convertTime(track.duration_ms)}</div>
        </div>
    );
}
