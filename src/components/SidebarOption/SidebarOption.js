import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidebarOption({ icon, text }) {
  return (
    <div className="sidebarOption">
      <h2>
        <FontAwesomeIcon icon={icon} /> {text}
      </h2>
    </div>
  );
}

export default SidebarOption;
