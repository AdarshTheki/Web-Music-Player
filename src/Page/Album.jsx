/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import BodyHeader from '../Components/Body/BodyHeader';
import BodyFooter from '../Components/Body/BodyFooter';
import Skeleton from '../Components/Loading/Skeleton';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDataLayerValue } from '../Context/DataLayer';

export default function Album({ spotify }) {
    const { albumId } = useParams();
    const [album, setAlbum] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [{ album: data }] = useDataLayerValue();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getAlbums() {
            try {
                setLoading(true);
                const result = await spotify.getAlbum(albumId);
                setAlbum(result);
                setTracks(
                    result.tracks.items.map((item) => ({ track: { album: { ...data }, ...item } }))
                );
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        getAlbums();
    }, [spotify, albumId, data]);

    if (loading) return <Skeleton />;

    return (
        <div>
            {/* Header Section */}
            <BodyHeader {...album} />
            <BodyFooter data={tracks} />
        </div>
    );
}
