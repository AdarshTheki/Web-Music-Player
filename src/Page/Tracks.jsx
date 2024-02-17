/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import BodyHeader from '../Components/Body/BodyHeader';
import BodyFooter from '../Components/Body/BodyFooter';
import IFrame from '../Components/Common/IFrame';
import { useParams } from 'react-router-dom';
import './Tracks.css';
import Skeleton from '../Components/Loading/Skeleton';

export default function Tracks({ spotify }) {
    const { trackId } = useParams();
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true);
                const res = await spotify.getTrack(trackId);
                setTracks(res);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, [trackId, spotify]);

    if (loading) return <Skeleton />;

    return (
        <div>
            <BodyHeader
                duration_ms={tracks?.duration_ms}
                album={tracks?.album}
                popularity={tracks?.popularity}
                name={tracks?.name || '#NA'}
                artists={tracks?.artists}
                type={tracks?.type}
                followers={tracks?.followers}
            />
            <IFrame />
            <Recommendations spotify={spotify} trackId={trackId} />
        </div>
    );
}

function Recommendations({ spotify, trackId }) {
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        async function fetchRecommendations() {
            try {
                const result = await spotify.getRecommendations({ seed_tracks: trackId });
                setRecommended(result?.tracks);
            } catch (error) {
                console.log(error);
            }
        }
        fetchRecommendations();
    }, [spotify, trackId]);

    return (
        <div>
            {recommended?.map((item, index) => (
                <BodyFooter key={index} track={item} index={index + 1} />
            ))}
        </div>
    );
}
