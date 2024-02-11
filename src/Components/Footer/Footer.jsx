/* eslint-disable react/prop-types */
import './Footer.css';
import {
    MdPlayCircleOutline,
    MdPauseCircleOutline,
    MdRepeat,
    MdOutlineShuffle,
    MdSkipNext,
    MdSkipPrevious,
    MdVolumeDownAlt,
} from 'react-icons/md';
import { useDataLayerValue } from '../../Context/DataLayer';
import { useState } from 'react';

const Footer = (props) => {
    const [{ playing, items }] = useDataLayerValue();
    const [play, setPlay] = useState(false);

    return (
        <div className='footer'>
            <div className='footer__left'>
                <img src={playing?.item?.album.images[0].url} alt='albumLogo' width='50' />
                <div className='footer__detail'>
                    <h4 title={playing?.item?.id}>{playing?.item?.name}</h4>
                    <p title={playing?.item?.artists[0].id}>{playing?.item?.artists[0].name}</p>
                </div>
            </div>
            <div className='footer__center'>
                <MdOutlineShuffle className='footer__icon' />
                <MdSkipPrevious className='footer__icon' color='secondary' />
                {play ? (
                    <MdPauseCircleOutline
                        className='footer__icon'
                        color='primary'
                        onClick={() => setPlay(!play)}
                    />
                ) : (
                    <MdPlayCircleOutline
                        className='footer__icon'
                        color='primary'
                        onClick={() => setPlay(!play)}
                    />
                )}
                <MdSkipNext className='footer__icon' color='secondary' />
                <MdRepeat className='footer__icon' />
            </div>

            <div className='footer__right'>
                <input type='range' name='' id='' />
                <MdVolumeDownAlt className='footer__icon' />
            </div>
        </div>
    );
};

export default Footer;
