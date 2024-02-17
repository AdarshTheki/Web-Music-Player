/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';
import { IoCloseCircle } from 'react-icons/io5';
import { useDataLayerValue } from '../../Context/DataLayer';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';

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

    function handleClick(index) {
        dispatch({ type: 'SET_SONGS', songs: data[index] });
        setShowDropdown(false);
        Navigate('/');
    }

    return (
        <div className='header'>
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
                            ? data?.slice(0, 8)?.map((item, index) => (
                                  <p key={item?.id} onClick={() => handleClick(index)}>
                                      {item?.name}, {item?.type}
                                  </p>
                              ))
                            : null}
                    </div>
                ) : null}
            </div>
            {/* User Profile Details */}
            <Profile spotify={spotify} />
        </div>
    );
};

export default Header;
