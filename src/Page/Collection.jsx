import React from 'react';
import { useDataLayerValue } from '../Context/DataLayer';
import BodyHeader from '../Components/Body/BodyHeader';
import BodyFooter from '../Components/Body/BodyFooter';
import { ButtonComponent } from '../Components/Common/Button';

export default function Collection() {
    const [{ collection}] = useDataLayerValue();

    return (
        <div className='body'>
            {/* Header Section */}
            <BodyHeader length={collection?.total} />
            {/* Button Play Section */}
            <ButtonComponent />
            <hr />
            {/* Body Row Section */}
            <div>
                {collection?.items?.length &&
                    collection?.items?.map((item, index) => (
                        <BodyFooter key={index} track={item?.track} added_at={item?.added_at} />
                    ))}
            </div>
        </div>
    );
}
