import SidebarItem from "./SidebarItem"
import items from "./data.json"
import "./styles.css";

function Sidebar(){
    return (
        <div className="sidebar">
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}

export default Sidebar;