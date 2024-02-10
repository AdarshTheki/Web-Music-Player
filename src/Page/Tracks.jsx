import React from 'react';
import { useDataLayerValue } from '../Context/DataLayer';
import BodyHeader from '../Components/Body/BodyHeader';
import { NavLink } from 'react-router-dom';

export default function Tracks() {
    const [{ tracks }, dispatch] = useDataLayerValue();
    console.log(tracks)

    return (
        <div className='body'>
            <BodyHeader
                duration_ms={tracks.duration_ms}
                album_src={tracks?.album?.images[0].url}
                album_name={tracks.album.name}
                album_type={tracks.album.type}
                album_release_date={tracks.album.release_date}
                popularity={tracks.popularity}
                name={tracks.name}
                artists_name={tracks.artists[0].name}
                artists_type={tracks.artists[0].type}
            />
            <NavLink to={tracks?.preview_url} target='__blank'>{tracks?.preview_url}</NavLink>
            <audio controls src={tracks?.preview_url}>
                audio
            </audio>
        </div>
    );
}
