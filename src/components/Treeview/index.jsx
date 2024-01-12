import Menulist from "./Menulist";
import './style.css';

const Treeview=({menu=[]})=>{
    return(
          <div className="tree-view-container">
            <Menulist list={menu} />
          </div>
    )
}
export default Treeview;