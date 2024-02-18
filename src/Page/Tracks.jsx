/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BodyHeader from '../Components/Body/BodyHeader';
import BodyFooter from '../Components/Body/BodyFooter';
import Skeleton from '../Components/Loading/Skeleton';

export default function Tracks({ spotify }) {
    const { trackId } = useParams();
    const [tracks, setTracks] = useState([]);
    const [recommended, setRecommended] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        try {
            setLoading(true);
            const tracks = await spotify.getTrack(trackId);
            setTracks(tracks);
            const result = await spotify.getRecommendations({ seed_tracks: trackId });
            setRecommended(result?.tracks);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [trackId, spotify]);

    if (loading) return <Skeleton />;

    return (
        <div>
            <BodyHeader {...tracks} />
            <div>
                {recommended?.map((item, index) => (
                    <BodyFooter key={index} track={item} index={index + 1} />
                ))}
            </div>
        </div>
    );
}
