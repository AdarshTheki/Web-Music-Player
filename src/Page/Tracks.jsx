/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import BodyHeader from '../Components/Body/BodyHeader';
import BodyFooter from '../Components/Body/BodyFooter';
import IFrame from '../Components/Common/IFrame';
import { useParams } from 'react-router-dom';
import './Tracks.css';

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

    if (loading) return <h1>Loading... !</h1>;

    return (
        <div>
            <BodyHeader
                duration_ms={tracks?.duration_ms}
                album_src={tracks?.album?.images[0]?.url}
                album_name={tracks?.album.name}
                album_type={tracks?.album?.type}
                album_release_date={tracks?.album?.release_date}
                popularity={tracks?.popularity}
                name={tracks?.name || '#NA'}
                artists_name={tracks?.artists[0]?.name}
                artists_type={tracks?.artists[0]?.type}
            />
            <IFrame />
            <ArtistsContainer artists={tracks.artists} spotify={spotify} />
            <Recommendations spotify={spotify} trackId={trackId} />
        </div>
    );
}

function ArtistsContainer({ artists, spotify }) {
    const [artistLists, setArtistLists] = useState([]);

    useEffect(() => {
        async function fetchArtists() {
            try {
                const data = await artists?.map((i) => i?.id);
                const result = await spotify.getArtists(data);
                setArtistLists(result?.artists);
            } catch (error) {
                console.log(error);
            }
        }
        fetchArtists();
    }, [spotify, artists]);

    return (
        <div className='artists__lists'>
            {artistLists?.map((item, index) => (
                <div key={index} className='artists__item'>
                    <section className='artists__img'>
                        <img src={item?.images[0]?.url} alt={item.name} width={50} />
                    </section>
                    <section>
                        <h5>Artist</h5>
                        <h3>{item?.name}</h3>
                    </section>
                </div>
            ))}
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
                <BodyFooter key={index} track={item} />
            ))}
        </div>
    );
}
