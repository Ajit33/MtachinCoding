import React from "react";
import MenuItem from "./Menu-itme";
import './style.css'
const Menulist = ({ list = [] }) => {
  return (
    <ul className="menu-list-container"> 
      {list && list.length
        ? list.map((listitem) => <MenuItem item={listitem} />)
        : null}
    </ul>
  );
};

export default Menulist;
