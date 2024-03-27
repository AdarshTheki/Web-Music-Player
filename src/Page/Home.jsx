/* eslint-disable react/prop-types */
import { useDataLayerValue } from '../Context/DataLayer.jsx';
import BodyFooter from '../Components/Body/BodyFooter.jsx';
import RowItems from '../Components/Common/RowItems.jsx';

export default function Home() {
    const [{ recentTracks, artistsList, playLists }] = useDataLayerValue();

    return (
        <div>
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
                <h3>Your Playlists</h3>
                <div className='rowItems__container'>
                    {playLists
                        ?.filter((item) => item?.owner?.display_name !== 'Spotify')
                        ?.map((item, index) => (
                            <RowItems key={index} {...item} type={'playlist'} />
                        ))}
                </div>
                <br />
                <h3>Recently Play Tracks</h3>
                <br />
                <BodyFooter data={recentTracks} />
            </div>
        </div>
    );
}
