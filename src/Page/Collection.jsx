/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import BodyHeader from '../Components/Body/BodyHeader';
import BodyFooter from '../Components/Body/BodyFooter';
import IFrame from '../Components/Common/IFrame';

export default function Collection({ spotify }) {
    const [collection, setCollection] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCollections() {
            setLoading(true);
            try {
                const result = await spotify.getMySavedTracks();
                setCollection(result.items);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCollections();
    }, [spotify]);

    if (loading) return <h2>Loading data | Please wait...</h2>;

    return (
        <div>
            {/* Header Section */}
            <BodyHeader length={collection?.length} />
            {/* Button Play Section */}
            <IFrame />
            <hr />
            {/* Body Row Section */}
            <div>
                {collection?.length &&
                    collection?.map((item, index) => (
                        <BodyFooter key={index} track={item?.track} added_at={item?.added_at} />
                    ))}
            </div>
        </div>
    );
}
