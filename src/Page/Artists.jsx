/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BodyFooter from '../Components/Body/BodyFooter';
import IFrame from '../Components/Common/IFrame'

export default function Artists({ spotify }) {
    const { artistsId } = useParams();
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGetArtist() {
            setLoading(true);
            try {
                const result = await spotify?.getArtistTopTracks(artistsId, 'in');
                setTracks(result?.tracks);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchGetArtist();
    }, [spotify, artistsId]);

    if (loading) return <h2>Loading data | Please wait...</h2>;

    return (
        <div>
            {/* Songs Play */}
            <IFrame/>
            {/* Artists Lists */}
            {tracks.map((item, index) => (
                <BodyFooter key={item.id} track={item} added_at={'04-06-2023'} index={index + 1} />
            ))}
        </div>
    );
}
