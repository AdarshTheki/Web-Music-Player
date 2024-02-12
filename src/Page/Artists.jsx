/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './Artists.css';
import BodyFooter from '../Components/Body/BodyFooter';

export default function Artists({ spotify }) {
    const [artists, setArtists] = useState([]);
    const [ids, setIds] = useState('7n2Ycct7Beij7Dj7meI4X0');
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        async function fetchAlbums() {
            try {
                const result = await spotify.getMyTopArtists();
                setArtists(result.items);
            } catch (error) {
                console.error(error);
            }
        }

        fetchAlbums();
    }, [spotify]);

    useEffect(() => {
        async function fetchGetArtist() {
            try {
                const result = await spotify?.getArtistTopTracks(ids, 'us');
                setTracks(result?.tracks);
            } catch (error) {
                console.error(error);
            }
        }
        fetchGetArtist();
    }, [spotify, ids]);

    const filterArtists = artists?.find((item) => item?.id === ids);

    function ArtistCard({ id, images, popularity, name, genres }) {
        return (
            <div onClick={() => setIds(id)} title={name} className='Artists'>
                <section className='Artists__img'>
                    <img src={images[2]?.url} alt={name} width={100} />
                </section>
                <section>
                    <h5>Artist</h5>
                    <h3>{name}</h3>
                </section>
            </div>
        );
    }

    return (
        <div style={{ padding: '0 20px' }}>
            <h2>Top Artists</h2>
            <br />
            <div className='Artists_container'>
                {artists.length && artists.map((item) => <ArtistCard key={item.id} {...item} />)}
            </div>
            <div style={{ margin: '30px', display: 'flex', gap: '20px' }}>
                <section>
                    <img
                        src={filterArtists?.images[1]?.url}
                        alt={filterArtists?.name}
                        width={200}
                    />
                </section>
                <section>
                    <p>Artist</p>
                    <br />
                    <h1>{filterArtists?.name}</h1>
                    <h4>{filterArtists?.popularity}K followers</h4>
                    {filterArtists?.genres.map((i) => (
                        <p key={i} className='span'>
                            • {i}
                        </p>
                    ))}
                </section>
            </div>
            <div>
                {tracks.map((item) => (
                    <BodyFooter key={item.id} track={item} added_at={'04-06-2023'} />
                ))}
            </div>
        </div>
    );
}
