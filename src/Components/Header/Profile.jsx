import React from 'react';
import { useDataLayerValue } from '../../Context/DataLayer';

export default function Profile({ spotify }) {
    const [{ user }] = useDataLayerValue();

    return (
        <div className='header__right'>
            <img
                src={user?.images[0]?.url}
                alt='user_profile'
                width={user?.images[0]?.width}
                height={user?.images[0]?.height}
            />
            <h4>{user?.display_name}</h4>
        </div>
    );
}
