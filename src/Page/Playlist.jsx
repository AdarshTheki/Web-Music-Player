/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BodyHeader from '../Components/Body/BodyHeader';
import BodyFooter from '../Components/Body/BodyFooter';
import Skeleton from '../Components/Loading/Skeleton';
import { useDataLayerValue } from '../Context/DataLayer';

export default function Playlist({ spotify }) {
    const { playlistId } = useParams();
    const [{ playLists }] = useDataLayerValue();
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(true);

    const currentPlaylists = playLists?.find((item) => item?.id === playlistId);

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

    if (loading) return <Skeleton />;

    return (
        <div>
            {/* Header Section */}
            <BodyHeader {...currentPlaylists} length={currentPlaylists?.tracks?.total} />

            {/* Body Row Section */}
            <BodyFooter data={playlists?.tracks?.items} />
        </div>
    );
}
