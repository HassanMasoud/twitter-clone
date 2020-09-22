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
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";

library.add(
  fab,
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faListAlt,
  faUser,
  faEllipsisH
);

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
