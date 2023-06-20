// import { Search } from "@material-ui/icons";
import { Avatar } from "@mui/material";
import React from "react";
import "./Header.css";
import { useDataLayerValue } from "../Context/DataLayer";

function Header() {
  const [{ user }] = useDataLayerValue();
  return (
    <div className='header'>
      <div className='header__left'>
        {/* <Search />
        <input type='text' placeholder='Search for Artists, Songs & Others...' /> */}

        <div className='wrap'>
          <div className='search'>
            <input
              type='text'
              className='searchTerm'
              placeholder='Search for Artists, Songs & others for?'
            />
            <button type='submit' className='searchButton'>
              <i className='fa fa-search'></i>
            </button>
          </div>
        </div>
      </div>
      <div className='header__right'>
        <Avatar src={user?.images[0]?.url} alt='RQ' />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
export default Header;
