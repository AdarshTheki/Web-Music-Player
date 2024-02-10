import React from 'react';
import { useDataLayerValue } from '../Context/DataLayer';
import BodyHeader from '../Components/Body/BodyHeader';
import BodyFooter from '../Components/Body/BodyFooter';
import { ButtonComponent } from '../Components/Common/Button';

export default function Playlist() {
    const [{ discover_weekly }] = useDataLayerValue();

    return (
        <div className='body'>
            {/* Header Section */}
            <BodyHeader
                length={discover_weekly?.tracks?.total}
                description={discover_weekly?.description}
                artists_name={discover_weekly.owner?.display_name}
                artists_type={discover_weekly.owner?.type}
                album_src={discover_weekly?.images[0].url}
                name={discover_weekly?.name}
                popularity={discover_weekly?.total}
            />
            {/* Button Play Section */}
            <div style={{ display: 'flex', gap: 20, margin: '20px 0' }}>
                <ButtonComponent />
            </div>

            <hr />
            {/* Body Row Section */}
            {discover_weekly.tracks.items?.map((item, index) => (
                <BodyFooter key={index} track={item?.track} added_at={item.added_at} />
            ))}
        </div>
    );
}
