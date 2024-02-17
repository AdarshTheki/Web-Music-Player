/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BodyHeader from '../Components/Body/BodyHeader';
import BodyFooter from '../Components/Body/BodyFooter';
import IFrame from '../Components/Common/IFrame';
import Skeleton from '../Components/Loading/Skeleton';

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

    function calculateTime(items = []) {
        return items.reduce((prev, curr) => (prev += Number(curr?.track?.duration_ms)), 0);
    }

    if (loading) return <Skeleton />;

    return (
        <div>
            {/* Header Section */}
            <BodyHeader
                length={playlists?.tracks?.items?.length}
                description={playlists?.description}
                images={playlists?.images}
                name={playlists?.name || '#NA'}
                owner={playlists?.owner}
                followers={playlists?.followers}
                duration_ms={calculateTime(playlists?.tracks?.items)}
            />
            {/* Button Play Section */}
            <div>
                <IFrame />
            </div>

            <hr />
            {/* Body Row Section */}
            {playlists?.tracks?.items?.map((item, index) => (
                <BodyFooter
                    key={index}
                    track={item?.track}
                    added_at={item?.added_at || item?.played_at}
                    index={index + 1}
                />
            ))}
        </div>
    );
}
