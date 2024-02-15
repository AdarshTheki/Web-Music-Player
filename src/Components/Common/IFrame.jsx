/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDataLayerValue } from '../../Context/DataLayer';
import { FaList } from 'react-icons/fa';
import { BsGrid1X2Fill } from 'react-icons/bs';
import './IFrame.css';

const CustomSpotifyIframe = ({
    width = '100%',
    color = 'ff0000',
    id = '5iNc4Yxd9yFHHMXQT4Cc6F',
}) => {
    const [{ songs }] = useDataLayerValue();
    const [height, setHeight] = useState('100px');

    return (
        <div style={{ padding: '0 20px', maxWidth: '900px' }}>
            <div className='icons'>
                <BsGrid1X2Fill
                    className={`react-icons ${height !== '100px' ? 'active' : ''}`}
                    onClick={() => setHeight('315px')}
                />
                <FaList
                    className={`react-icons ${height === '100px' ? 'active' : ''}`}
                    onClick={() => setHeight('100px')}
                />
            </div>

            <iframe
                src={`https://open.spotify.com/embed/track/${
                    songs?.id || id
                }?utm_source=generator&theme=0`}
                width={width}
                height={height}
                frameBorder='0'
                allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                loading='lazy'></iframe>
        </div>
    );
};

export default CustomSpotifyIframe;
