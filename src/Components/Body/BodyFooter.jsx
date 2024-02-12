/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { convertDate, convertTime } from '../../utils';
import './BodyFooter.css';
import LazyImage from '../Common/LazyImage';

export default function BodyFooter({ track, added_at }) {
    return (
        <div className='bodyFooter'>
            <div className='bodyFooter__rowOne col1'>
                {/* <img
                    src={track?.album?.images[2].url || track?.album?.images[0].url}
                    alt={track.name}
                    width={20}
                /> */}
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
            <div className='span hover line-clamp col2' title={track?.album?.type}>
                {track?.album?.name}
            </div>
            <div className='col3'>{added_at && convertDate(added_at) || '02-14-2023'}</div>
            <div className='col4'>{convertTime(track?.duration_ms) || "NA"}</div>
        </div>
    );
}
