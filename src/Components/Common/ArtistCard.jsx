/* eslint-disable react/prop-types */
import React from 'react';
import './ArtistCard.css';

const ArtistCard = ({ item }) => {
    return (
        <div className='artists'>
            <section className='artists__img'>
                <img src={item.images[0].url} alt={item.name} width={100} />
            </section>
            <section>
                <h5>Artist</h5>
                <h3>{item.name}</h3>
            </section>
        </div>
    );
};

export default HotHitsUSA;
