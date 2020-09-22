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
    </div>
  );
}

export default App;
