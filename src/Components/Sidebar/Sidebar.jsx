import { useDataLayerValue } from '../../Context/DataLayer';
import './Sidebar.css';
import { AiFillHome } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { MdLibraryMusic } from 'react-icons/md';
import logo from '../../assets/spotify_logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import SideBarList from './SideBarList.jsx';

const Sidebar = () => {
    const Navigate = useNavigate();
    const [{ playLists, id, collection }, dispatch] = useDataLayerValue();

    const setNullId = () => {
        dispatch({ type: 'SET_PLAYLIST_ID', id: null });
        Navigate('/collection/track');
    };

    return (
        <div>
            <div>
                <NavLink to='/'>
                    <img src={logo} alt='image_logo' className='sidebar__logo' />
                </NavLink>
                {/* Home section */}
                <section className='sidebar__music'>
                    <MdLibraryMusic fontSize={24} />
                    playLists
                </section>
            </div>
            {/* Like Collection */}
            <div
                onClick={() => setNullId()}
                className={`SideBarList ${id !== null ? '' : 'activeSideBarList'}`}>
                <div className='SideBarList__title'>
                    <img
                        src='https://misc.scdn.co/liked-songs/liked-songs-640.png'
                        alt='like'
                        width={50}
                        className='SideBarList__icon'
                    />
                    <div>
                        <h5 className='line-clamp'>Liked Songs</h5>
                        <p className='span line-clamp'>playlist ● {collection?.total} songs</p>
                    </div>
                </div>
            </div>
            {/* PlayLists  */}
            <div>
                {playLists?.map((e, index) => {
                    return <SideBarList key={index} {...e} />;
                })}
            </div>
        </div>
    );
};

export default Sidebar;
