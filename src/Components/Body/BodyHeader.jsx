import React from 'react';
import picture from '../../assets/songs.png';
import './BodyHeader.css';
import { convertTime, convertDate } from '../../utils';

export default function BodyHeader({
    duration_ms = 221700,
    album_release_date = '2023',
    album_src,
    album_name,
    album_type,
    popularity,
    name = 'Liked Songs',
    artists_name = 'owner name',
    artists_type = 'user',
    description,
    length,
}) {
    return (
        <div className='bodyHeader'>
            <div>
                <img src={album_src || picture} alt='body info picture' />
            </div>
            <div className='bodyHeader__detail'>
                <p>Playlists</p>
                <h2>{name}</h2>
                {description && <p>{description}</p>}
                <div className='bodyHeader__other'>
                    {artists_name && (
                        <span style={{ fontSize: 15 }} title={artists_type}>
                            {artists_name}
                        </span>
                    )}
                    {album_name && <span title={album_type}>{album_name}</span>}
                    {album_release_date && <span>{convertDate(album_release_date)}</span>}
                    {popularity && <span>{popularity + ' K'}</span>}
                    {duration_ms && <span>{convertTime(duration_ms)}</span>}
                    {length && <span style={{ fontSize: 15 }}>{length + ' songs'}</span>}
                </div>
            </div>
        </div>
    );
}
