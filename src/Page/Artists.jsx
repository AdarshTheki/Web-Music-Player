/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BodyFooter from '../Components/Body/BodyFooter';
import BodyHeader from '../Components/Body/BodyHeader';
import Skeleton from '../Components/Loading/Skeleton';

export default function Artists({ spotify }) {
    const { artistsId } = useParams();
    const [tracks, setTracks] = useState([]);
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchArtists() {
            setLoading(true);
            try {
                const artists = await spotify.getArtist(artistsId);
                const tracksList = await spotify?.getArtistTopTracks(artistsId, 'in');
                setArtists(artists);
                setTracks(tracksList?.tracks);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchArtists();
    }, [spotify, artistsId]);

    if (loading) return <Skeleton />;

    return (
        <div>
            {/* Header Section */}
            <BodyHeader
                name={artists?.name}
                images={artists?.images}
                type={artists?.type}
                popularity={artists?.popularity}
                duration_ms={artists?.duration_ms}
                followers={artists?.followers}
            />
            {/* Artists Lists */}
            {tracks.map((item, index) => (
                <BodyFooter key={item.id} track={item} added_at={'04-06-2023'} index={index + 1} />
            ))}
        </div>
    );
}
