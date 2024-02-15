/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import BodyHeader from '../Components/Body/BodyHeader';
import BodyFooter from '../Components/Body/BodyFooter';
import IFrame from '../Components/Common/IFrame';
import { useParams } from 'react-router-dom';

export default function Playlist({ spotify }) {
    const { playlistId } = useParams();
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPlaylists() {
            setLoading(true);
            try {
                const result = await spotify.getPlaylist(playlistId);
                setPlaylists(result);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchPlaylists();
    }, [spotify, playlistId]);

    if (loading) return <h2>Loading data | Please wait...</h2>;

    return (
        <div>
            {/* Header Section */}
            <BodyHeader
                length={playlists?.tracks?.items?.length}
                description={playlists?.description}
                artists_name={playlists?.owner?.display_name}
                artists_type={playlists?.owner?.type}
                album_src={playlists?.images[0]?.url}
                name={playlists?.name || '#NA'}
                popularity={playlists?.popularity}
            />
            {/* Button Play Section */}
            <div>
                <IFrame />
            </div>

            <hr />
            {/* Body Row Section */}
            {playlists?.tracks?.items?.map((item, index) => (
                <BodyFooter key={index} track={item?.track} added_at={item?.added_at} />
            ))}
        </div>
    );
}
