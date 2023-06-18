import { Search } from "@material-ui/icons";
import React from "react";

function Header() {
  return <div className="header">
    <div className="header__left">
      <Search/>
      <input type="text" placeholder="Search for Artists, Songs, other" />
    </div>
    <div className="header__right">
      <h4>Rafe Quazi</h4>
    </div>
  </div>;
}
export default Header;
