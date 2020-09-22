import React from "react";
import "./Sidebar.css";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarOption from "../SidebarOption/SidebarOption";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <FontAwesomeIcon icon={["fab", "twitter"]} />
        <SidebarOption active icon="home" text="Home" />
        <SidebarOption icon="hashtag" text="Explore" />
        <SidebarOption icon="bell" text="Notifications" />
        <SidebarOption icon="envelope" text="Messages" />
        <SidebarOption icon="bookmark" text="Bookmarks" />
        <SidebarOption icon="list-alt" text="Lists" />
        <SidebarOption icon="user" text="Profile" />
        <SidebarOption icon="ellipsis-h" text="More" />
        <Button variant="outlined" className="sidebar__tweet" fullWidth>
          Tweet
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
