import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post
        displayName="Los Angeles Lakers"
        username="Lakers"
        verified
        text="We stand with our players and the players of the NBA in their demand for justice and the end of racial violence."
        image="https://pbs.twimg.com/card_img/1306400608644022273/G6zzgiOc?format=jpg&name=medium"
        avatar="https://pbs.twimg.com/profile_images/1298765301979336704/GB7KuBvA_reasonably_small.jpg"
      />
    </div>
  );
}

export default Feed;
