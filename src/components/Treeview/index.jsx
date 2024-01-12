import Menulist from "./Menulist";


const Treeview=({menu=[]})=>{
    return(
          <div className="tree-view-container">
            <Menulist list={menu} />
          </div>
    )
}
export default Treeview;