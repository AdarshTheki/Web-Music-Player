/* eslint-disable react/prop-types */
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Collection from './Page/Collection';
import Playlist from './Page/Playlist';
import Artists from './Page/Artists';
import Tracks from './Page/Tracks';
import Home from './Page/Home';
import Header from './Components/Body/Header';
import './Player.css';

const Player = ({ spotify }) => {
    return (
        <BrowserRouter>
            <div className='player'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='body'>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home spotify={spotify}/>} />
                        <Route path='track/:trackId' element={<Tracks spotify={spotify} />} />
                        <Route path='playlist/:playlistId' element={<Playlist spotify={spotify}/>} />
                        <Route path='collection/track' element={<Collection spotify={spotify}/>} />
                        <Route path='artists/:artistsId' element={<Artists spotify={spotify} />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Player;
