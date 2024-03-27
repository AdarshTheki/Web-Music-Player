/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';
import { IoCloseCircle } from 'react-icons/io5';
import { useDataLayerValue } from '../../Context/DataLayer';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/spotify_logo.svg';

const Header = ({ spotify }) => {
    const Navigate = useNavigate();
    const [{ user }, dispatch] = useDataLayerValue();
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setInputValue(query);
        if (query.length > 1) {
            setSearchValue(query);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    }

    useEffect(() => {
        if (searchValue) {
            const fetchSearchQuery = async () => {
                try {
                    const result = await spotify?.search(searchValue, [
                        'album',
                        'artist',
                        'playlist',
                        'track',
                    ]);
                    const filter = result?.tracks?.items.length
                        ? result?.tracks?.items.filter((item) =>
                              item?.name.toLowerCase()?.includes(searchValue)
                          )
                        : [];
                    setData(filter);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchSearchQuery();
        }
    }, [searchValue, spotify]);

    function handleClick(id, type) {
        setShowDropdown(false);
        Navigate(`/${type}/${id}`);
    }

    return (
        <div className='header-container'>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <NavLink to={'/'}>
                    <img width={100} className='logo' src={logo} alt='logo' />
                </NavLink>
                <div className='header__left'>
                    <div className='search'>
                        <input
                            type='text'
                            name='search'
                            value={inputValue}
                            onChange={handleChange}
                            className='searchTerm'
                            placeholder='Search for Artists, Songs & others for?'
                        />
                        <FaSearch className='searchButton' />
                    </div>
                    {showDropdown ? (
                        <div className='search__item'>
                            <IoCloseCircle
                                onClick={() => setShowDropdown(false)}
                                className='search__icon'
                            />
                            {data.length
                                ? data?.slice(0, 8)?.map((item) => (
                                      <p
                                          key={item?.id}
                                          onClick={() => handleClick(item?.id, item?.type)}>
                                          {item?.name}, {item?.type}
                                      </p>
                                  ))
                                : null}
                        </div>
                    ) : null}
                </div>
            </div>
            {/* User Profile Details */}
            <div className='header__right'>
                <img
                    src={user?.images[0]?.url}
                    alt='user_profile'
                    width={user?.images[0]?.width}
                    height={user?.images[0]?.height}
                />
            </div>
        </div>
    );
};

export default Header;
