import React from "react";
import "./sidebarOption.css";

function SideBarOption({ title, Icon }) {
  return (
    <div className='sidebarOption'>
      <div className='sidebarOption__title'>
        {Icon && <Icon className='sidebarOption__icon' />}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
      </div>
    </div>
  );
}
export default SideBarOption;
