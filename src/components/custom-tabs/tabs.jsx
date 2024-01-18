import { useState } from "react";

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
          <div key={tabitems.label}>
            <span className="label" onClick={()=>handelOnClick(index)}>{tabitems.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
          {
            tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
          }
         
      </div>
    </div>
  );
};
export default Tabs;
