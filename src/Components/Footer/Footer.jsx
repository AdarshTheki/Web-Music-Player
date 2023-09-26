import "./Footer.css";
import {
  MdPlayCircleOutline,
  MdRepeat,
  MdOutlineShuffle,
  MdSkipNext,
  MdSkipPrevious,
  MdVolumeDownAlt,
} from "react-icons/md";
import { useDataLayerValue } from "../../Context/DataLayer";

const Footer = () => {
  const [{ discover_weekly }] = useDataLayerValue();

  return (
    <div className='footer'>
      <div className='footer__left'>
        <img src={discover_weekly?.images[0].url} alt='albumLogo' width='50' />
        <div className='footer__detail'>
          <h4>{discover_weekly?.name}</h4>
          <p>{discover_weekly?.tracks?.items[0].track.name}</p>
        </div>
      </div>
      <div className='footer__center'>
        <MdOutlineShuffle className='footer__icon' />
        <MdSkipPrevious className='footer__icon' color='secondary' />
        <MdPlayCircleOutline className='footer__icon' color='primary' />
        <MdSkipNext className='footer__icon' color='secondary' />
        <MdRepeat className='footer__icon' />
      </div>

      <div className='footer__right'>
        <MdPlayCircleOutline className='footer__icon' />
        <input type="range" name="" id="" />
        <MdVolumeDownAlt className='footer__icon' />
      </div>
    </div>
  );
};

export default Footer;
