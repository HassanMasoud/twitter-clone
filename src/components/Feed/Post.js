import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {verified && (
                  <FontAwesomeIcon
                    className="post__badge"
                    icon="check-circle"
                  />
                )}{" "}
                @{username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
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
