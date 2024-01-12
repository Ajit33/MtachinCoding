import { useState } from "react";
import Menulist from "./Menulist";
import {FaPlus,FaMinus} from 'react-icons/fa'
import "./style.css";

const MenuItem = ({ item }) => {
  const [showchildren, setshowchildern] = useState({});
  function handelchildernToggel(getcurrentLabel) {
    setshowchildern({
      ...showchildren,
      [getcurrentLabel]: !showchildren[getcurrentLabel],
    });
  }
  return (
    <li>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handelchildernToggel(item.label)}>
            {
               showchildren[item.label] ? <FaMinus color='white' size={25} />:<FaPlus color='white' size={25} />
            }
          </span>
        ) : null}
      </div>
      {item && item.children && item.children.length > 0 && showchildren[item.label] ? (
        <Menulist list={item.children} />
      ) : null}
    </li>
  );
};
export default MenuItem;
