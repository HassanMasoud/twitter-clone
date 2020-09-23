import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <FontAwesomeIcon icon="search" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1308620532330434560"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="KingJames"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://github.com/hassanmasoud"}
          options={{ text: "Follow me on GitHub" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
