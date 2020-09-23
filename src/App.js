import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faListAlt,
  faUser,
  faEllipsisH,
  faCheckCircle,
  faComment,
  faRetweet,
  faHeart,
  faShareSquare,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";

library.add(
  fab,
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faListAlt,
  faUser,
  faEllipsisH,
  faCheckCircle,
  faComment,
  faRetweet,
  faHeart,
  faShareSquare,
  faSearch
);

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
