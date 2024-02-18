/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import BodyHeader from '../Components/Body/BodyHeader';
import BodyFooter from '../Components/Body/BodyFooter';
import Skeletons from '../Components/Loading/Skeleton';

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

    if (loading) return <Skeletons />;

    return (
        <div>
            {/* Header Section */}
            <BodyHeader length={collection?.length} />
            
            {/* Body Row Section */}
            <div>
                {collection?.length &&
                    collection?.map((item, index) => (
                        <BodyFooter
                            key={index}
                            track={item?.track}
                            added_at={item?.added_at || item?.played_at}
                            index={index + 1}
                        />
                    ))}
            </div>
        </div>
    );
}
