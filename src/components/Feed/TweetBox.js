import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/448098642914594816/5QxXRobP_reasonably_small.jpeg" />
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          type="text"
          name=""
          id=""
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
