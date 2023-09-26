import Sidebar from "./Components/Sidebar/Sidebar";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";

const Player = ({ spotify }) => {
  const styles = {
    display: "flex",
    background: "#000",
  };
  return (
    <div className='player'>
      <div className='player__body' style={styles}>
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer/>
    </div>
  );
};

export default Player;
