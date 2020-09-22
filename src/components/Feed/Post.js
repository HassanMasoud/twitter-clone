import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/448098642914594816/5QxXRobP_reasonably_small.jpeg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Hassan Masoud{" "}
              <span className="post__headerSpecial">
                <FontAwesomeIcon className="post__badge" icon="check-circle" />{" "}
                @hassanmasoud
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I just built a Twitter clone with React</p>
          </div>
        </div>
        <img
          src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
          alt=""
          srcset=""
        />
        <div className="post__footer">
          <FontAwesomeIcon icon="comment" />
          <FontAwesomeIcon icon="retweet" />
          <FontAwesomeIcon icon="heart" />
          <FontAwesomeIcon icon="share-square" />
        </div>
      </div>
    </div>
  );
}

export default Post;
