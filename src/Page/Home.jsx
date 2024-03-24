/* eslint-disable react/prop-types */
import { useDataLayerValue } from '../Context/DataLayer.jsx';
import BodyHeader from '../Components/Body/BodyHeader.jsx';
import RowItems from '../Components/Common/RowItems.jsx';

export default function Home({ spotify }) {
    const [{ playing, artistsList, playLists }] = useDataLayerValue();

    return (
        <div>
            {/* Body Header section */}
            <BodyHeader length={playing?.items?.length} type={'Recently Play Song'} />

            {/* PlayLists Song Row  */}
            <div style={{ padding: '0 20px' }}>
                <h3>Top Play Artists</h3>
                <div className='rowItems__container'>
                    {artistsList
                        ?.sort((a, b) => b?.followers.total - a?.followers.total)
                        ?.map((item, index) => (
                            <RowItems key={index} {...item} type={'artists'} />
                        ))}
                </div>
                <br />
                <h3>Top Play Playlists</h3>
                <div className='rowItems__container'>
                    {playLists
                        ?.filter((item) => item?.owner?.display_name !== 'Spotify')
                        ?.map((item, index) => (
                            <RowItems key={index} {...item} type={'playlist'} />
                        ))}
                </div>
                <br />
                <h3>Recently Play Tracks</h3>
                <div className='rowItems__container'>
                    {playing
                        ?.filter((item) => item?.track.album.name)
                        ?.map((item, index) => (
                            <RowItems key={index} {...item?.track.album} type={'album'} />
                        ))}
                </div>
                <br />
            </div>
        </div>
    );
}
