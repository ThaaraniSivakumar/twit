import React from "react";
import './SidebarOptions.css'
const SidebarOptions = ({active,text,Icon}) =>{
    return(
        <div className={`sidebarOptions ${active &&  `sidebarOptions_active`}`} style={{minWidth:'150px'}}>
    <Icon />
<h2 style={{marginLeft:"15px"}}>{text}</h2>
        </div>
)
}
export default SidebarOptions;
