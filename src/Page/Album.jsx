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
                setTracks(result1?.items?.map((item) => ({ track: item })));
            } catch (error) {
                console.error(error);
            }
        }
        getAlbums();
    }, [spotify, albumId]);

    console.log(tracks)

    return (
        <div>
            {/* Header Section */}
            <BodyHeader {...album} />
            <BodyFooter data={tracks} />
        </div>
    );
}
