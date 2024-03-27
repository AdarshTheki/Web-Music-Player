/* eslint-disable react/prop-types */
import React from 'react';
import BodyHeader from '../Components/Body/BodyHeader';
import BodyFooter from '../Components/Body/BodyFooter';
import { useDataLayerValue } from '../Context/DataLayer';

export default function Collection({ spotify }) {
    const [{ collections }] = useDataLayerValue();

    return (
        <div>
            {/* Header Section */}
            <BodyHeader length={collections?.length} />

            {/* Body Row Section */}
            <BodyFooter data={collections}/>
        </div>
    );
}
