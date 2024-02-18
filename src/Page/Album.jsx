/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import BodyHeader from '../Components/Body/BodyHeader';
import BodyFooter from '../Components/Body/BodyFooter';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function Album({ spotify }) {
    const { albumId } = useParams();
    const [album, setAlbum] = useState([]);
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        async function getAlbums() {
            try {
                const result = await spotify.getAlbum(albumId);
                setAlbum(result);
                const result1 = await spotify.getAlbumTracks(albumId);
                setTracks(result1?.items);
            } catch (error) {
                console.error(error);
            }
        }
        getAlbums();
    }, [spotify, albumId]);

    return (
        <div>
            {/* Header Section */}
            <BodyHeader
                name={album?.name}
                artists={album?.artists}
                images={album?.images}
                description={album?.label}
                duration_ms={album?.duration_ms}
                popularity={album?.popularity}
                type={album?.type}
            />
            <div>
                {tracks?.map((items, index) => (
                    <BodyFooter
                        key={index}
                        index={index + 1}
                        track={items}
                        added_at={'2023-04-22'}
                    />
                ))}
            </div>
        </div>
    );
}
