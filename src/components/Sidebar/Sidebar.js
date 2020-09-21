import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarOption from "../SidebarOption/SidebarOption";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <FontAwesomeIcon icon={["fab", "twitter"]} />
        <SidebarOption icon="home" text="Home" />
        <SidebarOption icon="hashtag" text="Explore" />
        <SidebarOption icon="cog" text="Settings" />
      </div>
    </div>
  );
}

export default Sidebar;
