import React from 'react';
import './Card.css'

const HotHitsUSA = () => {
    return (
        <section>
            <h2 className='Header'>Hot Hits USA</h2>
            <p className='SubHeader'>The hottest tracks in the United States</p>
            <div className='Track'>
                <span className='TrackTitle'>Track 1</span>
                <span>Artist 1</span>
            </div>
            <div className='TrackTitle'>
                <span className='TrackTitle'>Track 2</span>
                <span>Artist 2</span>
            </div>
            <div className='TrackTitle'>
                <span className='TrackTitle'>Track 3</span>
                <span>Artist 3</span>
            </div>
        </section>
    );
};

export default HotHitsUSA;
