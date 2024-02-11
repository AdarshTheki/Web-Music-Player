/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDataLayerValue } from '../Context/DataLayer';
import BodyHeader from '../Components/Body/BodyHeader';
import BodyFooter from '../Components/Body/BodyFooter';
import { ButtonComponent } from '../Components/Common/Button';
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
            <ButtonComponent />
            <hr />
            <FooterComonnets spotify={spotify} tracks={tracks} trackId={trackId} />
            {/* <div>
                {items?.map((items, index) => (
                    <BodyFooter key={index} track={items?.track} added_at={items?.added_at} />
                ))}
            </div> */}
        </div>
    );
}

function FooterComonnets({ spotify, tracks, trackId }) {
    const [{ items }, dispatch] = useDataLayerValue();
    const [artistLists, setArtistLists] = useState([]);

    useEffect(() => {
        async function fetchArtists() {
            try {
                const data = await tracks?.artists?.map((i) => i?.id);
                const result = await spotify.getArtists(data);
                setArtistLists(result?.artists);
            } catch (error) {
                console.log(error);
            }
        }
        async function fetchRecommendations() {
            try {
                const result = await spotify.getRecommendations({ seed_tracks: trackId });
                if (result?.tracks.length > 0) {
                    dispatch({ type: 'SET_ITEMS', items: result?.tracks });
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchArtists();
        fetchRecommendations();
    }, [trackId, dispatch, spotify, tracks?.artists]);

    return (
        <div style={{ padding: '20px' }}>
            <div className='artists__lists'>
                {artistLists?.map((item, index) => (
                    <div key={index} className='artists'>
                        <section className='artists__img'>
                            <img src={item?.images[0]?.url} alt={item.name} width={100} />
                        </section>
                        <section>
                            <h5>Artist</h5>
                            <h3>{item?.name}</h3>
                        </section>
                    </div>
                ))}
            </div>
            <p>Top Track by this Artists:</p>
            <br />
            <div>
                {items?.map((item, index) => (
                    <BodyFooter key={index} track={item} />
                ))}
            </div>
        </div>
    );
}
