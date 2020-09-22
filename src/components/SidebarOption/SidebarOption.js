import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SidebarOption.css";

function SidebarOption({ active, icon, text }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <div className="sidebarIcon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
