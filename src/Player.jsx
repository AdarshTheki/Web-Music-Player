/* eslint-disable react/prop-types */
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
import Collection from './Page/Collection';
import Playlist from './Page/Playlist';
import Album from './Page/Album';
import Tracks from './Page/Tracks';
import Home from './Page/Home';
import Header from './Components/Body/Header';
import './Player.css';

const Player = ({ spotify }) => {
    return (
        <BrowserRouter>
            <div className='player'>
                <div className='player__body'>
                    <div className='sidebar'>
                        <Sidebar />
                    </div>
                    <div className='body'>
                        <Header />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='track/:trackId' element={<Tracks spotify={spotify} />} />
                            <Route path='playlist/:playlistId' element={<Playlist />} />
                            <Route path='collection/track' element={<Collection />} />
                            <Route path='album/:albumId' element={<Album />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default Player;
