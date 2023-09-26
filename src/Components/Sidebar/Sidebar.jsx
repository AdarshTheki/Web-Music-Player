import { useDataLayerValue } from "../../Context/DataLayer";
import "./Sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import SideBarOption from "./SideBarOption.jsx";
import logo from "../../assets/spotify_logo.svg";

const Sidebar = () => {
  // Pull the playList with the help of DataLayer
  const [{ playLists }] = useDataLayerValue();
  return (
    <div className='sidebar'>
      <img src={logo} alt='image_logo' className='sidebar__logo' />
      <SideBarOption Icon={AiFillHome} title='Home' />
      <SideBarOption Icon={FaSearch} title='Search' />
      <SideBarOption Icon={MdLibraryMusic} title='Your Library' />

      <br />
      <strong className='sidebar__title'>playlist sidebar</strong>
      <hr />
      {playLists?.items?.map((e, index) => {
        // console.log("✅",e,index)
        return <SideBarOption key={index} title={e.name} ids={e.id} />;
      })}
    </div>
  );
};

export default Sidebar;
