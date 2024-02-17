/* eslint-disable react/prop-types */
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import { Collection, Playlist, Artists, Tracks, Home, Album } from './Page';
import './Player.css';

const Player = ({ spotify }) => {
    return (
        <BrowserRouter>
            <div className='player'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='body'>
                    <Header spotify={spotify} />
                    <Routes>
                        <Route path='/' element={<Home spotify={spotify} />} />
                        <Route path='track/:trackId' element={<Tracks spotify={spotify} />} />
                        <Route
                            path='playlist/:playlistId'
                            element={<Playlist spotify={spotify} />}
                        />
                        <Route path='collection/track' element={<Collection spotify={spotify} />} />
                        <Route path='artists/:artistsId' element={<Artists spotify={spotify} />} />
                        <Route path='album/:albumId' element={<Album spotify={spotify} />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Player;
