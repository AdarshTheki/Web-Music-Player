import "./SideBarOption.css";
import { useDataLayerValue } from "../../Context/DataLayer";

const SideBarOption = ({ title, Icon, ids }) => {
  const [{ id }, dispatch] = useDataLayerValue();
  
  const setIds = (item) => {
    dispatch({ type: "SET_ID", id: item });
  };
  
  return (
    <div className='sidebarOption'>
      <div className='sidebarOption__title'>
        {Icon && (
          <>
            <Icon className='sidebarOption__icon' />
            <h4>{title}</h4>
          </>
        )}
        {ids && <p onClick={() => setIds(ids)}>{title}</p>}
      </div>
    </div>
  );
};

export default SideBarOption;
