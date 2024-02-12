import React, { useEffect, useState } from 'react';
import lazy from '../../assets/songs.png';

export default function LazyImage({ src, alt = 'lazyImage' }) {
    const [imgSrc, setImgSrc] = useState(lazy || src);

    const customClass = lazy && imgSrc === lazy ? 'loading__image' : 'loaded__image';

    useEffect(() => {
        const newImage = new Image();
        newImage.src = src;
        newImage.onload = () => {
            setImgSrc(src);
        };

        return () => {
            newImage.onload = null;
        };
    }, [src]);
    return <img src={imgSrc} alt={alt} loading='lazy' className={customClass} />;
}
