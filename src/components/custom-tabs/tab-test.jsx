import Tabs from "./tabs";


const TabTest=()=>{
    const tabs=[
        {
            label:"Tab1",
            content:<div>This is the Tab 1</div>
        },
        {
            label:"Tab2",
            content:<div>This is the Tab 2</div>
        },
        {
            label:"Tab3",
            content:<div>This is the Tab 3</div>
        },
    ]
    function handelChange(currentTabIndex){
        console.log(currentTabIndex);
    }
    return(
       <Tabs tabsContent={tabs} onChange={handelChange} />
    )
}
export default TabTest;