import { useState } from "react";
import './tabs.css';
const Tabs = ({ tabsContent, onChange }) => {


    const[currentTabIndex,setCurrentTabIndex]=useState(0);
    function handelOnClick(getCurrentIdx){
        setCurrentTabIndex(getCurrentIdx);
        onChange(getCurrentIdx);
    }
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabitems,index) => (
          <div className={`tab-item ${currentTabIndex==index?"active" :""}`} key={tabitems.label} onClick={()=>handelOnClick(index)}>
            <span className="label" >{tabitems.label}</span>
          </div>
        ))}
      </div>
      <div className="result">
          {
            tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
          }
         
      </div>
    </div>
  );
};
export default Tabs;
