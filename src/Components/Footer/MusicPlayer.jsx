/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDataLayerValue } from '../../Context/DataLayer';
import './MusicPlayer.css';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import { MdOutlineSkipPrevious, MdOutlineSkipNext } from 'react-icons/md';

const SongPlayer = ({ spotify }) => {
    const [{ recentTracks, songs }, dispatch] = useDataLayerValue();
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [currentProgress, setCurrentProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef();

    const currentTrack = recentTracks?.[currentTrackIndex];

    useEffect(() => {
        if (isPlaying) {
            const timeout = setInterval(() => {
                setCurrentProgress(
                    (audioRef.current.currentTime / audioRef.current.duration) * 100
                );
            }, 250);
            return () => clearInterval(timeout);
        }
    }, [isPlaying]);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handlePreviousTrack = () => {
        setCurrentProgress(0);
        setIsPlaying(false);
        setCurrentTrackIndex((currentTrackIndex - 1 + recentTracks.length) % recentTracks.length);
    };

    const handleNextTrack = () => {
        setCurrentProgress(0);
        setIsPlaying(false);
        setCurrentTrackIndex((currentTrackIndex + 1) % recentTracks.length);
    };

    const handleAudioChange = (e) => {
        const progress = parseFloat(e.target.value);
        setCurrentProgress(progress);
        audioRef.current.currentTime = (progress / 100) * audioRef.current.duration;
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className='music-player'>
            <div className='music-detail'>
                <SongsDetail {...currentTrack?.track} />
            </div>
            <div className='music-controls'>
                {/* <p>{currentTrack?.track?.name}</p> */}
                <audio ref={audioRef} src={currentTrack?.track?.preview_url}></audio>
                <div className='controls'>
                    <MdOutlineSkipPrevious onClick={handlePreviousTrack} />
                    {isPlaying ? (
                        <FaPauseCircle onClick={handlePlayPause} />
                    ) : (
                        <FaPlayCircle onClick={handlePlayPause} />
                    )}
                    <MdOutlineSkipNext onClick={handleNextTrack} />
                </div>
                <div className='progress'>
                    {formatTime(audioRef.current?.currentTime || 0)}
                    <input
                        style={{ width: '100%' }}
                        className='audio-progress'
                        type='range'
                        name='audioPlay'
                        id='audioPlay'
                        max={100}
                        step={1}
                        min={0}
                        value={currentProgress}
                        onChange={handleAudioChange}
                    />
                    {formatTime(audioRef.current?.duration || 0)}
                </div>
            </div>
        </div>
    );
};

const SongsDetail = ({ album, artists = [], name = '', id }) => {
    return (
        <>
            <img src={album?.images[0]?.url} alt={name} />
            <div>
                <NavLink className='title' to={`/track/${id}`}>
                    {name?.substring(0, 25)}
                </NavLink>
                <p>
                    <NavLink className='artists_name' to={`/artists/${artists[0]?.id}`}>{artists[0]?.name}</NavLink>
                </p>
            </div>
        </>
    );
};

export default SongPlayer;
