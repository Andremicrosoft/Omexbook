import React from "react";
import Avatar from "@mui/material/Avatar";
import "../Styles/Post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import IosShareIcon from "@mui/icons-material/IosShare";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Post({ profilePic, username, image, message, timestamp }) {
  return (
    <div className="post">
      <div className="post-top">
        <Avatar className="post-avatar" src={profilePic} />
        <div className="post-top-info">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post-bottom">
        <p>{message}</p>
      </div>
      {image && (
        <div className="post-image">
          <img src={image} alt="What is published" />
        </div>
      )}
      <div className="post-options">
        <div className="post-option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post-option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post-option">
          <IosShareIcon />
          <p>Share</p>
        </div>
        <div className="post-option">
          <LocationOnIcon />
          <p>Location</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
