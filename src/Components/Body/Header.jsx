import React from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';
import { useDataLayerValue } from '../../Context/DataLayer';

const Header = () => {
    const [{ user }] = useDataLayerValue();

    return (
        <div className='header'>
            <div className='header__left'>
                <div className='search'>
                    <input
                        type='text'
                        className='searchTerm'
                        placeholder='Search for Artists, Songs & others for?'
                    />
                    <FaSearch className='searchButton' />
                </div>
            </div>
            <div className='header__right'>
                <img
                    src={user?.images[0]?.url}
                    alt='RQ'
                    width={user?.images[0]?.width}
                    height={user?.images[0]?.height}
                />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
};

export default Header;
