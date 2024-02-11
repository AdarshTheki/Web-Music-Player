/* eslint-disable react/prop-types */
import { useDataLayerValue } from '../Context/DataLayer.jsx';
import { ButtonComponent } from '../Components/Common/Button.jsx';
import BodyFooter from '../Components/Body/BodyFooter.jsx';
import BodyHeader from '../Components/Body/BodyHeader.jsx';

const Body = () => {
    const [{ discover_weekly }] = useDataLayerValue();

    return (
        <div>
            {/* Body Header section */}
            <BodyHeader
                length={discover_weekly?.tracks.items?.length}
                src={discover_weekly?.images[0].url}
                name={discover_weekly?.name}
                description={discover_weekly?.description}
                infoName={discover_weekly?.owner?.display_name}
            />

            {/* Music Play Button */}
            <ButtonComponent />

            {/* PlayLists Song Row  */}
            <hr />
            <div>
                {discover_weekly?.tracks.items.length &&
                    discover_weekly?.tracks.items.map((item, index) => (
                        <BodyFooter key={index} track={item.track} added_at={item.added_at} />
                    ))}
            </div>
        </div>
    );
};

export default Body;
