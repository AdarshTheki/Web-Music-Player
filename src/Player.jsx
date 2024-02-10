/* eslint-disable react/prop-types */
import { useDataLayerValue } from './Context/DataLayer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import Collection from './Page/Collection';
import Playlist from './Page/Playlist';
import Album from './Page/Album';
import Tracks from './Page/Tracks';
import './Player.css';

const Player = ({ spotify }) => {
    const [{ item }] = useDataLayerValue();

    return (
        <BrowserRouter>
            <div className='player'>
                <div className='player__body'>
                    <Sidebar />
                    <Routes>
                        <Route path='track/:trackId' element={<Tracks />} />
                        <Route path='playlist/:playlistId' element={<Playlist />} />
                        <Route path='collection/track' element={<Collection />} />
                        <Route path='album/:albumId' element={<Album />} />
                        <Route path='*' element={<Body spotify={spotify} />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default Player;
