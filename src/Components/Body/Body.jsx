import { useDataLayerValue } from "../../Context/DataLayer";
import "./Body.css";
import { MdOutlineFavorite } from "react-icons/md";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import Header from "./Header";
import SongRow from "./SongRow.jsx";

const Body = ({ spotify }) => {
  const [{ discover_weekly }] = useDataLayerValue();

  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body__info'>
        <div className='body__img'>
          <img src={discover_weekly?.images[0].url} alt='bgImageAny' />
        </div>
        <div>
          <div className='body__infoText'>
            <strong>Playlists</strong>
            <h2>{discover_weekly?.name?.slice(0, 15)}</h2>
            <p>{discover_weekly?.description}</p>
          </div>
          <div className='body__icon'>
            <FaPlayCircle fontSize={40} />
            <MdOutlineFavorite fontSize={20} />
            <MdOutlineMoreHoriz fontSize={20} />
          </div>
        </div>
      </div>
      <div className='body__songs'>
        {/* List of songs */}
        <div className='body__col'>
          {discover_weekly?.tracks.items.map((item, index) => (
            <SongRow track={item.track} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
