/* eslint-disable no-empty-pattern */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { convertDate, convertTime } from '../../utils';
import LazyImage from '../Common/LazyImage';
import Skeleton from '../Loading/Skeleton';
import { useDataLayerValue } from '../../Context/DataLayer';
import Modal from '../Common/Modal';

export default function Data({ data = [] }) {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectSort, setSelectSort] = useState('title');
    const [filterData, setFilterData] = useState(data);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (data.length > 0) return setLoading(false);
    }, [data.length]);

    const handleFilterData = (e) => {
        const { value } = e.target;
        setQuery(value);
        const filterFunction = (item) => {
            return value === '' || item.track.name.toLowerCase().includes(value.toLowerCase());
        };
        const updatedData = data.filter(filterFunction);
        setFilterData(updatedData);
    };

    const handleSortData = (sort) => {
        const sortData = [...filterData].sort((a, b) => {
            if (sort === 'title') {
                return a?.track?.name?.localeCompare(b?.track?.name);
            } else if (sort === 'artists') {
                return a?.track?.artists[0]?.name?.localeCompare(b?.track?.artists[0]?.name);
            } else if (sort === 'album') {
                return a?.track?.album?.name?.localeCompare(b?.track?.album?.name);
            } else if (sort === 'recent') {
                return b['added_at' || 'played_at'].localeCompare(a['added_at' || 'played_at']);
            } else if (sort === 'duration') {
                return b?.track?.duration_ms - a?.track?.duration_ms;
            }
        });
        setFilterData(sortData);
        setSelectSort(sort);
        setIsOpen(false);
    };

    if (loading) return <Skeleton />;

    return (
        <>
            <div className='bodyFooter_search'>
                <input
                    id='search songs'
                    name='search songs'
                    type='text'
                    placeholder='find songs by name'
                    value={query}
                    onChange={handleFilterData}
                />
                <button onClick={() => setIsOpen(true)}>sort</button>
                <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                    <div className='select-sort'>
                        <p className='sort' onClick={() => setIsOpen(false)}>
                            <span>sort by</span>
                            <span className='close'>×</span>
                        </p>
                        <p onClick={() => handleSortData('title')}>
                            <span>title</span> <span>{selectSort === 'title' && '✔'}</span>
                        </p>
                        <p onClick={() => handleSortData('artists')}>
                            <span>artists</span> <span>{selectSort === 'artists' && '✔'}</span>
                        </p>
                        <p onClick={() => handleSortData('album')}>
                            <span>album</span> <span>{selectSort === 'album' && '✔'}</span>
                        </p>
                        <p onClick={() => handleSortData('duration')}>
                            <span>duration</span> <span>{selectSort === 'duration' && '✔'}</span>
                        </p>
                        <p onClick={() => handleSortData('recent')}>
                            <span>recent Added</span> <span>{selectSort === 'recent' && '✔'}</span>
                        </p>
                    </div>
                </Modal>
            </div>
            <div className='bodyFooter-header'>
                <div style={{ flex: 2 }}>#&nbsp;&nbsp;&nbsp;Title</div>
                <div style={{ flex: 1 }}>Album</div>
                <div style={{ width: '100px' }}>Date</div>
                <div style={{ width: '50px' }}>Duration</div>
            </div>
            {filterData?.map((item, index) => (
                <BodyFooter
                    key={index}
                    track={item?.track}
                    added_at={item?.added_at || item?.played_at}
                    index={index + 1}
                />
            ))}
        </>
    );
}

function BodyFooter({
    track = {
        album: {
            album_type: 'album',
            id: '#',
            images: [
                {
                    url: 'https://i.scdn.co/image/ab67616d0000485177eb7a5b9367de79c3b92a49',
                },
            ],
            name: 'album none',
            release_date: '2000-01-01',
            type: 'album',
        },
        artists: [
            {
                id: '#',
                name: 'artists none',
                type: 'artist',
            },
        ],
        duration_ms: 12345,
        id: '#',
        name: 'none',
        popularity: 54,
        preview_url: null,
        track_number: null,
        type: 'track',
    },
    added_at = '02-14-2023',
    index,
}) {
    const [{ recentTracks }, dispatch] = useDataLayerValue();
    const navigate = useNavigate();

    const handlePlaySongs = (song) => {
        const isUnique = recentTracks.filter((item) => item.track.id !== song.id);
        if (isUnique) {
            const updatedRecentTracks = [
                { track: song, played_at: '2024-03-20T12:19:21.864Z' },
                ...isUnique,
            ];

            dispatch({
                type: 'SET_RECENT_TRACKS',
                payload: updatedRecentTracks,
            });
        }
    };

    const handleAlbumNavigate = (id) => {
        dispatch({ type: 'SET_ALBUM', payload: track.album });
        navigate(`/album/${id}`);
    };

    const handleArtistsNavigate = (id) => {
        navigate(`/artists/${id}`);
    };

    return (
        <div className='bodyFooter' onClick={() => handlePlaySongs(track)}>
            <div className='col1' style={{ flex: 2 }}>
                {index && <p>{index}</p>}
                <LazyImage src={track?.album?.images[0]?.url} alt={track.name} />
                <div>
                    <NavLink
                        title={track.type}
                        className='bodyFooter__name'
                        to={`/track/${track.id}`}>
                        {track.name}
                    </NavLink>
                    <div>
                        {track.artists.slice(0, 3).map((artist) => (
                            <span
                                style={{ paddingRight: '8px' }}
                                className='span_link'
                                onClick={() => handleArtistsNavigate(artist.id)}
                                key={artist.id}
                                title={artist.type}>
                                {`${artist.name},`}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div
                onClick={() => handleAlbumNavigate(track?.album?.id)}
                className='col2'
                style={{ flex: 1 }}
                title={track?.album?.type}>
                <span className='span_link'>{track?.album?.name}</span>
            </div>
            <div className='col3' style={{ width: '100px' }}>
                {convertDate(added_at)}
            </div>
            <div className='col4' style={{ width: '50px' }}>
                {convertTime(track?.duration_ms)}
            </div>
        </div>
    );
}
