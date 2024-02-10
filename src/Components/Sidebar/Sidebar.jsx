import { useDataLayerValue } from '../../Context/DataLayer';
import './Sidebar.css';
// import { AiFillHome } from 'react-icons/ai';
// import { FaSearch } from 'react-icons/fa';
// import { MdLibraryMusic } from 'react-icons/md';
import logo from '../../assets/spotify_logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import SideBarList from './SideBarList.jsx';

const Sidebar = () => {
    const Navigate = useNavigate();
    const [{ playLists, id, collection }] = useDataLayerValue();

    return (
        <div className='sidebar'>
            <NavLink to='/'>
                <img src={logo} alt='image_logo' className='sidebar__logo' />
            </NavLink>

            {/* Home section */}
            {/* <SideBarOption Icon={AiFillHome} title='Home' />
            <SideBarOption Icon={FaSearch} title='Search' />
        <SideBarOption Icon={MdLibraryMusic} title='Your Library' /> */}

            <strong className='sidebar__title'>playlist</strong>
            {/* Like Collection */}
            <div onClick={() => Navigate('/collection/track')} className='SideBarList'>
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
                {playLists?.items?.map((e, index) => {
                    return <SideBarList key={index} {...e} />;
                })}
            </div>
        </div>
    );
};

export default Sidebar;
