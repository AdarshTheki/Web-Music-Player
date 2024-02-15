/* eslint-disable react/prop-types */
import { useDataLayerValue } from '../Context/DataLayer.jsx';
import IFrame from '../Components/Common/IFrame.jsx';
import BodyFooter from '../Components/Body/BodyFooter.jsx';
import BodyHeader from '../Components/Body/BodyHeader.jsx';

const Body = () => {
    const [{ playing, songs }] = useDataLayerValue();

    return (
        <div>
            {/* Body Header section */}
            <BodyHeader
                length={playing?.items?.length}
                album_src={songs?.album?.images[0]?.url}
                name={'Recently play songs'}
                album_release_date={songs?.album?.release_date}
                album_name={songs?.album?.name}
                artists_name={songs?.artists[0]?.name}
                duration_ms={songs?.duration_ms}
                popularity={songs?.popularity}
            />

            {/* Music Play Button */}
            <IFrame />

            {/* PlayLists Song Row  */}
            <hr />
            <div>
                {playing?.items.length &&
                    playing?.items.map((item, index) => (
                        <BodyFooter
                            key={index}
                            track={item.track}
                            added_at={item.played_at}
                            index={index + 1}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Body;
