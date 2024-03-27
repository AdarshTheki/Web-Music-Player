import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './RowItems.css';

export default function RowItems({
    external_urls,
    followers = { total: 9526 },
    genres = [],
    href,
    id,
    images = [],
    name,
    popularity,
    type,
    description,
}) {
    return (
        <NavLink to={`/${type}/${id}`} className='rowItems'>
            <div className='rowItems__img'>
                <img src={images[0]?.url} alt={name} />
                <p>{followers.total.toLocaleString('en-us', Number)}</p>
                <FaPlayCircle />
            </div>
            <div className='rowItems__detail'>
                <p>{name?.substring(0, 20)}</p>
                {genres.length ? genres?.map((i) => <span key={i}>{i}</span>) : null}
            </div>
        </NavLink>
    );
}
